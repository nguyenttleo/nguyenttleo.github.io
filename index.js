const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth * .95
canvas.height = window.innerHeight * .95

const Back = document.getElementById('back')
const Middle = document.getElementById('middle')
const Front = document.getElementById('front')
const gravity = 0.6

const player = new Fighter({
  position: {
    x: 200,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/leo1/Idle.png',
  framesMax: 6,
  scale: 2.5,
  offset: {
    x: 230,
    y: 200
  },
  sprites: {
    idle: {
      imageSrc: './img/leo1/Idle.png',
      framesMax: 6
    },
    run: {
      imageSrc: './img/leo1/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/leo1/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/leo1/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/leo1/Attack2.png',
      framesMax: 8
    },
    takeHit: {
      imageSrc: './img/leo1/Fall.png',
      framesMax: 2
    },
    death: {
      imageSrc: './img/leo1/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: 0,
      y: 50
    },
    width: 180,
    height: 80
  }
})

const enemy = new Fighter({
  position: {
    x: canvas.width - 400,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './img/leo2/Idle.png',
  framesMax: 8,
  scale: 3.5,
  offset: {
    x: 230,
    y: 440
  },
  sprites: {
    idle: {
      imageSrc: './img/leo2/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './img/leo2/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/leo2/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/leo2/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/leo2/Attack1.png',
      framesMax: 8
    },
    takeHit: {
      imageSrc: './img/leo2/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/leo2/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -140,
      y: 50
    },
    width: 200,
    height: 80
  }
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  l: {
    pressed: false
  },
  j: {
    pressed: false
  }
}

decreaseTimer()

let x = 0
let x2 = 1280
let x3 = 1280 * 2
let x4 = 1280 * 3
const movSpeedx = .2

let y = 0
let y2 = 1536
let y3 = 1536 * 2
let y4 = 1536 * 3
let y5 = 1536 * 4
let y6 = 1536 * 5
const movSpeedy = .3

let z = 0
let z2 = 1056
let z3 = 2112
let z4 = 1056 * 3
const movSpeedz = 1

function gameLoop() {
  window.requestAnimationFrame(gameLoop)
  c.clearRect(0, 0, canvas.width, canvas.height)
  if (x < -canvas.width) {
    x = 1280 - movSpeedx + x4
  } else {
    x -= movSpeedx
  }

  if (x2 < -canvas.width) {
    x2 = 1280 - movSpeedx + x
  } else {
    x2 -= movSpeedx
  }

  if (x3 < -canvas.width) {
    x3 = 1280 - movSpeedx + x2
  } else {
    x3 -= movSpeedx
  }

  if (x4 < -canvas.width) {
    x4 = 1280 - movSpeedx + x3
  } else {
    x4 -= movSpeedx
  }

  c.drawImage(Back, x, 0)
  c.drawImage(Back, x2, 0)
  c.drawImage(Back, x3, 0)
  c.drawImage(Back, x4, 0)

  if (y < -canvas.width) {
    y = 1536 - movSpeedy + y6
  } else {
    y -= movSpeedy
  }

  if (y2 < -canvas.width) {
    y2 = 1536 - movSpeedy + y
  } else {
    y2 -= movSpeedy
  }

  if (y3 < -canvas.width) {
    y3 = 1536 - movSpeedy + y2
  } else {
    y3 -= movSpeedy
  }

  if (y4 < -canvas.width) {
    y4 = 1536 - movSpeedy + y3
  } else {
    y4 -= movSpeedy
  }

  if (y5 < -canvas.width) {
    y5 = 1536 - movSpeedy + y4
  } else {
    y5 -= movSpeedy
  }

  if (y6 < -canvas.width) {
    y6 = 1536 - movSpeedy + y5
  } else {
    y6 -= movSpeedy
  }

  c.drawImage(Middle, y, -200)
  c.drawImage(Middle, y2, -200)
  c.drawImage(Middle, y3, -200)
  c.drawImage(Middle, y4, -200)
  c.drawImage(Middle, y5, -200)
  c.drawImage(Middle, y6, -200)

  if (z < -canvas.width) {
    z = 1056 - movSpeedz + z4
  } else {
    z -= movSpeedz
  }

  if (z2 < -canvas.width) {
    z2 = 1056 - movSpeedz + z
  } else {
    z2 -= movSpeedz
  }

  if (z3 < -canvas.width) {
    z3 = 1056 - movSpeedz + z2
  } else {
    z3 -= movSpeedz
  }

  if (z4 < -canvas.width) {
    z4 = 1056 - movSpeedz + z3
  } else {
    z4 -= movSpeedz
  }

  c.drawImage(Front, z, 330)
  c.drawImage(Front, z2, 330)
  c.drawImage(Front, z3, 330)
  c.drawImage(Front, z4, 330)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  // Enemy movement
  if (keys.j.pressed && enemy.lastKey === 'j') {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.l.pressed && enemy.lastKey === 'l') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else {
    enemy.switchSprite('idle')
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }
}

gameLoop()

window.addEventListener('keydown', (event) => {
  if (!player.dead && !enemy.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        if (player.velocity.y === 0) {
          player.velocity.y = -20
        }
        break
      case 's':
        player.attack()
        break
    }
  }

  if (!enemy.dead && !player.dead) {
    switch (event.key) {
      case 'l':
        keys.l.pressed = true
        enemy.lastKey = 'l'
        break
      case 'j':
        keys.j.pressed = true
        enemy.lastKey = 'j'
        break
      case 'i':
        if (enemy.velocity.y === 0) {
          enemy.velocity.y = -20
        }
        break
      case 'k':
        enemy.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'l':
      keys.l.pressed = false
      break
    case 'j':
      keys.j.pressed = false
      break
  }
})
