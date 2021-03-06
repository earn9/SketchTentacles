const Caustics = function(width, height) {
    const caustics = [];

    this.update = timeStep => {
        for (const caustic of caustics)
            caustic.update(timeStep);
    };

    this.draw = context => {
        for (const caustic of caustics)
            caustic.draw(context);
    };

    for (let i = 0; i < 1 / Caustic.THICKNESS_MAX; ++i)
        caustics.push(new Caustic(Math.random() * width, width, height, Math.random()));
};