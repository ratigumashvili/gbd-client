module.exports = {
    apps: [
        {
            name: "gbd-v-3",
            script: "npm",
            args: "start",
            env: {
                PORT: 3000,
                NODE_ENV: "production",
            },
        },
    ],
};