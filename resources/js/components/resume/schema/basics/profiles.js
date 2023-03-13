const padding =['p-0','pe-md-1'];
const colMd = (col)=>[`col-md-${col}`, ...padding];
export default {
    fields: [
        // Network
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Twiteer',
            label: 'Network',
            model: 'network',
            styleClasses: colMd(4),
        },
// URL
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'https://twitter.com/user',
            label: 'Url',
            model: 'url',
            styleClasses: colMd(4),
        },
        //Username
        
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Yourname',
            label: 'Username',
            model: 'username',
            styleClasses: colMd(4),
        },

    ],
};