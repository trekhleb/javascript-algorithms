'use strict';

// Src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateLetter() {
  const code = random(97, 123); // ASCII char codes
  return String.fromCharCode(code);
}

class Member {
  constructor(target) {
    this.target = target;
    this.keys = [];

    for (let i = 0; i < target.length; i += 1) {
      this.keys[i] = generateLetter();
    }
  }

  fitness() {
    let matches = 0;

    for (let i = 0; i < this.keys.length; i += 1) {
      if (this.keys[i] === this.target[i]) {
        matches += 1;
      }
    }

    return matches / this.target.length;
  }

  crossover(partner) {
    const { length } = this.target;
    const child = new Member(this.target);
    const midpoint = random(0, length);

    for (let i = 0; i < length; i += 1) {
      if (i > midpoint) {
        child.keys[i] = this.keys[i];
      } else {
        child.keys[i] = partner.keys[i];
      }
    }

    return child;
  }

  mutate(mutationRate) {
    for (let i = 0; i < this.keys.length; i += 1) {
      // If below predefined mutation rate,
      // generate a new random letter on this position.
      if (Math.random() < mutationRate) {
        this.keys[i] = generateLetter();
      }
    }
  }
}

class Population {
  constructor(size, target, mutationRate) {
    size = size || 1;
    this.members = [];
    this.mutationRate = mutationRate;

    for (let i = 0; i < size; i += 1) {
      this.members.push(new Member(target));
    }
  }

  evolve(generations) {
    for (let i = 0; i < generations; i += 1) {
      const pool = this._selectMembersForMating();
      this._reproduce(pool);
    }
  }

  _selectMembersForMating() {
    const matingPool = [];

    this.members.forEach((m) => {
      // The fitter he/she is, the more often will be present in the mating pool
      // i.e. increasing the chances of selection
      // If fitness == 0, add just one member
      const f = Math.floor(m.fitness() * 100) || 1;

      for (let i = 0; i < f; i += 1) {
        matingPool.push(m);
      }
    });

    return matingPool;
  }

  _reproduce(matingPool) {
    for (let i = 0; i < this.members.length; i += 1) {
      // Pick 2 random members/parent from the mating pool
      const parentA = matingPool[random(0, matingPool.length)];
      const parentB = matingPool[random(0, matingPool.length)];

      // Perform crossover
      const child = parentA.crossover(parentB);

      // Perform mutation
      child.mutate(this.mutationRate);

      this.members[i] = child;
    }
  }
}

// Init function
function initialize(populationSize, target, mutationRate, generations) {
  let perfectCandidateFound = false;
  // Create a population and evolve for N generations
  const population = new Population(populationSize, target, mutationRate);
  population.evolve(generations);

  // Get the typed words from all members and find if someone was able to type the target
  const membersKeys = population.members.map((m) => m.keys.join(''));
  const perfectCandidatesNum = membersKeys.filter((w) => w === target);

  // Print the results
  let numOfPerfectCandidates = perfectCandidatesNum ? perfectCandidatesNum.length : 0;
  console.log(membersKeys);
  console.log(`${numOfPerfectCandidates} member(s) typed "${target}"`);

  perfectCandidateFound = Boolean(numOfPerfectCandidates > 0);

  return perfectCandidateFound;
}

function genetic() {
  let foundStatus = false;
  foundStatus = initialize(80, 'hit', 0.05, 20);
  return foundStatus;
}

genetic();

export default genetic;