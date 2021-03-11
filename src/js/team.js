export default class Team {
  constructor(characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    let i = 0;
    const end = this.characters.length - 1;
    return {
      next: () => {
        if (i > end) return { done: true };
        i += 1;
        return { done: false, value: this.characters[i - 1] };
      },
    };
  }
}
