<template>
  <div>
    <Tabs>
      <Tab title="Basics" icon="fas fa-user">
        <!-- <FieldResumeImage /> -->
        <VueFormGenerator 
        :schema="schemas.basics"
        :model="resume.content.basics"
        :options="options"
        />
        <VueFormGenerator 
        :schema="schemas.location"
        :model="resume.content.basics.location"
        :options="options"
        />
      </Tab>
     
    </Tabs>
  </div>
</template>

<script>
// import VueFormGenerator from 'vue-form-generator';
// import 'vue-form-generator/dist/vfg.css'
// import { BTabs} from 'bootstrap-vue';
// import { BTab} from 'bootstrap-vue';
// Vue.component('BTabs',BTabs);
// Vue.component('BTab',BTab);
import FieldResumeImage from './vfg/FieldResumeImage.vue';
import Tabs from './tabs/Tabs.vue';
import Tab from './tabs/Tab.vue';
import basics from './schema/basics/basics';
import location from './schema/basics/location';
import { component as VueFormGenerator } from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css' 
export default {


  name: 'ResumeForm',

  components: {
    Tabs,
    Tab,
    VueFormGenerator,
    FieldResumeImage,
  },
  data(){
    return{
      resume: {
        title:'',
        content:{
          basics:{
            location:{},
            picture:{},
          },
          
        }
      },
      schemas: {
        basics,
        location,
      },
      options: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      }
    }
  }
};
</script>

