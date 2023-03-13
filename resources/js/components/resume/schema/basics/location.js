const padding = ['p-0', 'pe-md-1'];
const colMd = (col) => [`col-md-${col}`, ...padding];
// const colMd(4) =['col-md-4,...padding'];
// const colMd6 =['col-md-6,...padding'];
export default {
    fields: [
     //Address
        {
            type: 'input',
            inputType: 'text',
            placeholder: '271 Broadway St',
            label: 'Address',
            model: 'address',
            styleClasses: colMd(4),

        },
          // Postal Code
          {
            type: 'input',
            inputType: 'text',
            placeholder: 'CA 933534',
            label: 'Postal Code',
            model: 'postalCode',
            styleClasses: colMd(4),

        },
        //City
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'San Francisco',
            label: 'City',
            model: 'city',
            styleClasses: colMd(4),

        },
          //Country Code
          {
            type: 'input',
            inputType: 'text',
            placeholder: 'US',
            label: 'Country Code',
            model: 'countryCode',
            styleClasses: colMd(6),

        },
           //Region
           {
            type: 'input',
            inputType: 'text',
            placeholder: 'California',
            label: 'Region',
            model: 'region',
            styleClasses: colMd(6),

        },
        
    ]
};