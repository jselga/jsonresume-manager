const padding =['p-0','pe-md-1'];
const colMd = (col)=>[`col-md-${col}`, ...padding];
// const colMd(4) =['col-md-4,...padding'];
// const colMd6 =['col-md-6,...padding'];
export default {
    fields: [
        //Picture
        {
            type:'resume-image',
            label: 'Resume Profile Image',
            model: 'picture',
        },
        // Name
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Your name',
            label: 'Name',
            model: 'name',
            styleClasses: colMd(4),
            // required: true,
        },
        // Label
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Programmer',
            label: 'Label',
            model: 'label',
            styleClasses: colMd(4),
        },
        // Email
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'yourname@email.com',
            label: 'Email',
            model: 'email',
            validator: 'email',
            styleClasses: colMd(4),
        },
        // Phone
        {
            type: 'input',
            inputType: 'tel',
            placeholder: '987456123',
            label: 'Phone',
            model: 'phone',
            styleClasses: colMd(6),
        },
        // Website
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'http://yourwebsite.com',
            label: 'Website',
            model: 'website',
            validator: 'url',
            styleClasses: colMd(6),

        },
        // Summary
        {
            type: 'textArea',
            inputType: 'text',
            placeholder: 'A little bit about yourself',
            label: 'Summary',
            model: 'summary',
        },
    ]

}    