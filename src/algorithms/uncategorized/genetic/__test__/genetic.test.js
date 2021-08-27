import {Toolbox, GeneticAlgorithm, Algorithms} from '../genetic';

describe("Genetic Algorithm", function() {

	describe('Creation', function() {
		let toolbox;
		let popSize;
		let mutProb;
		let breedFunction;

		beforeEach(function(done) {
			toolbox = new Toolbox();
			popSize = 10;
			mutProb = .10;
			breedFunction = Algorithms.crossBreed;
			done();
		});

		it('should throw an exception when toolbox is undefined', function () {
			expect(function() {
				new GeneticAlgorithm();
			}).toThrow();
		});

		it('should throw an exception when population size is undefined', function() {
			expect(function() { 
				new GeneticAlgorithm(toolbox);
			}).toThrow();
		});

		it('should throw an exception when population size is 1', function() {
			expect(function() { 
				new GeneticAlgorithm(toolbox, 1);
			}).toThrow();
		});

		it('should throw an exception when population size is 2', function() {
			expect(function() { 
				new GeneticAlgorithm(toolbox, 2);
			}).toThrow();
		});

		it('should throw an exception when mutability probability is undefined', function() {
			expect(function() {
				new GeneticAlgorithm(toolbox, popSize);
			}).toThrow();
		});

		it('should throw an exception when breed function is undefined', function() {
			expect(function() {
				new GeneticAlgorithm(toolbox, popSize, mutProb);
			}).toThrow();
		});
	});

	describe('Generate Population', function() {
		let ga;
		let toolbox;
		let individual;
		let popSize;
		let mutProb;
		let breedFunction;
		let population;

		beforeEach(function(done) {
			individual = [1, 1, 1, 1];
			toolbox = new Toolbox();
			toolbox.genIndv = function() { return individual; };

			popSize = 10;
			mutProb = .10;
			breedFunction = Algorithms.crossBreed;

			ga = new GeneticAlgorithm(toolbox, popSize, mutProb, breedFunction);
			population = ga.generatePopulation(toolbox.genIndv, popSize);
			done();
		});

		it('should return an array', function() {
			expect(population instanceof Array).toBe(true);
		});

		it('should return an array of the same size as population size', function() {
			expect(population.length).toBe(popSize);
		});

		it('should generate individuals of type object', function() {
			for(let i = 0; i < population.length; i++) {
				expect(population[i] instanceof Object).toBe(true);
			}
		});

		it('should generate individuals with attribute of type array', function() {
			for(let i = 0; i < population.length; i++) {
				expect(population[i].individual instanceof Array).toBe(true);
			}
		});

		it('should generate individuals equal to test individual', function() {
			for(let i = 0; i < population.length; i++) {
				let generatedIndividual = population[i].individual;
				for(let j = 0; j < generatedIndividual.length; j++) {
					expect(generatedIndividual[i] === individual[i]).toBe(true);
				}
			}
		});
	});

	describe('Get Fitness', function() {
		let ga;
		let toolbox;
		let individual;
		let popSize;
		let mutProb;
		let breedFunction;
		let population;

		beforeEach(function(done) {
			individual = [1, 1, 1, 1];

			toolbox = new Toolbox();
			toolbox.getFitness = function(indv) { return 4; };

			popSize = 10;
			mutProb = .10;
			breedFunction = Algorithms.crossBreed;

			ga = new GeneticAlgorithm(toolbox, popSize, mutProb, breedFunction);
			population = ga.generatePopulation(toolbox.genIndv, popSize);
			done();
		});

		it('should return correct fitness value for all individuals', function() {
			let evaluatedPopulation = ga.getFitness(population, toolbox.getFitness);
			
			for(let i = 0; i < evaluatedPopulation.length; i++) {
				let individualFitness = evaluatedPopulation[i].fitness;
				expect(individualFitness).toBe(4);
			}
		});
	});

	describe('Sort by Fitness', function() {
		let ga;
		let toolbox;
		let popSize;
		let mutProb;
		let breedFunction;
		let population;

		beforeEach(function(done) {
			popSize = 10;
			mutProb = .10;

			toolbox = new Toolbox();
			toolbox.genIndv = function() {
				let indv = [];
				for(let j = 0; j < 10; j++) {
					indv.push(Math.round(Math.random()));
				}
				return indv;
			};

			toolbox.getFitness = function(indv) { 
				let fitness = 0;
				for(let i = 0; i < indv.length; i++) {
					fitness += indv[i];
				}
				return fitness; 
			};
			
			breedFunction = Algorithms.crossBreed;

			ga = new GeneticAlgorithm(toolbox, popSize, mutProb, breedFunction);
			population = ga.generatePopulation(toolbox.genIndv, popSize);
			done();
		});

		it('should sort population in ascending order by fitness value when fitness goal is max', function() {
			toolbox.goalFitness = Toolbox.fitnessMax;
			population = ga.getFitness(population, toolbox.getFitness);
			let sortedPopulation = ga.sortByFitness(population, toolbox.getFitness, toolbox.goalFitness);

			let previousFitness = 100;
			for(let i = 0; i < sortedPopulation.length; i++) {
				let fitness = sortedPopulation[i].fitness;
				expect(fitness).not.toBeGreaterThan(previousFitness);
				previousFitness = fitness;
			}
		});

		it('should sort population in descending order by fitness value when fitness goal is min', function() {
			toolbox.goalFitness = Toolbox.fitnessMin;
			population = ga.getFitness(population, toolbox.getFitness);
			let sortedPopulation = ga.sortByFitness(population, toolbox.getFitness, toolbox.goalFitness);

			let previousFitness = -1;
			for(let i = 0; i < sortedPopulation.length; i++) {
				let fitness = sortedPopulation[i].fitness;
				expect(fitness).not.toBeLessThan(previousFitness);
				previousFitness = fitness;
			}
		});
	});
	
});