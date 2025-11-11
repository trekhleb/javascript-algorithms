import Singleton from '../Singleton';

describe('Singleton', () => {
  it('should create an instance of Singleton', () => {
    const instance = new Singleton({ name: 'Singleton Object' });
    expect(instance).toBeDefined();
    expect(instance).toBeInstanceOf(Singleton);
  });

  it('should return the same instance for multiple instantiations', () => {
    const firstInstance = new Singleton({ name: 'First Instance' });
    const secondInstance = new Singleton({ name: 'Second Instance' });

    expect(firstInstance).toBe(secondInstance);
  });

  it('should retain the initial configuration for multiple instantiations', () => {
    const firstInstance = new Singleton({ name: 'Initial Config' });
    new Singleton({ name: 'Different Config' });

    expect(firstInstance.config.name).toBe('Initial Config');
  });

  it('should return the same instance even when created with different parameters', () => {
    const firstInstance = new Singleton({ name: 'First Config' });
    const secondInstance = new Singleton({ name: 'Second Config' });

    expect(firstInstance.config.name).toBe('First Config');
    expect(secondInstance.config.name).toBe('First Config');
  });

  it('should not create a new instance when a second instance is created with different parameters', () => {
    const firstInstance = new Singleton({ name: 'First Config' });
    const secondInstance = new Singleton({ name: 'Second Config' });

    expect(firstInstance).toBe(secondInstance);
    expect(secondInstance.config.name).not.toBe('Second Config');
  });
});
