
class Singleton {
  constructor(config) {
    // Check if an instance already exists; if yes, return it
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance;
    }

    // If no instance exists, proceed to create one
    this.config = config;
    Singleton.instance = this;

    return this;
  }
}


