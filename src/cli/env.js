const parseEnv = () => {
    const rssEnv = [];
    Object.entries(process.env).forEach(([key, value]) => {
        if (key.startsWith('RSS')) rssEnv.push(`${key}=${value}`);
    });
    console.log(rssEnv.join('; '))
};

parseEnv();