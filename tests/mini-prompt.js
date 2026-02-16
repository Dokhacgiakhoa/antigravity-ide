const prompts = require('prompts');

(async () => {
    console.log('--- START ---');
    const response = await prompts({
        type: 'confirm',
        name: 'value',
        message: 'Can you hear me?',
        initial: true
    });
    console.log(`--- END: ${response.value} ---`);
})();
