class CharacterModel {
  shouldMove() {
    if (!this.dir) return false

    if (this.timer === this.speed) {
      this.timer = 0
      return true
    }
    this.timer++
    return false
  }

  getNextMove(objectExist) {
    let nextMovePos = this.pos + this.dir.movement

    if (
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
    ) {
      nextMovePos = this.pos
    }
    return { nextMovePos, direction: this.dir }
  }
  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN]
    const classesToAdd = [OBJECT_TYPE.PACMAN]

    return { classesToRemove, classesToAdd }
  }

  setNewPos(nextMovePos) {
    this.pos = nextMovePos
  }

  handleKeyInput(e, objectExist) {
    // console.log(e)
    let dir

    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = DIRECTIONS[e.key]
    } else {
      return
    }

    const nextMovePos = this.pos + dir.movement
    if (
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
    )
      return
    this.dir = dir
  }
}
