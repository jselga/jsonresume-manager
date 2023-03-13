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
      <Tab title="Profiles" icon="fas fa-users">
        
        <DynamicForm 
         title="Profile"
         self="profiles"
         :model="resume.content.basics" 
         :schema="schemas.profiles"
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

import Tabs from './tabs/Tabs.vue';
import Tab from './tabs/Tab.vue';
import basics from './schema/basics/basics';
import location from './schema/basics/location';
import profiles from './schema/basics/profiles';
import { component as VueFormGenerator } from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import FieldResumeImage from './vfg/FieldResumeImage.vue';
import DynamicForm from './dynamic/DynamicForm.vue';
export default {


  name: 'ResumeForm',

  components: {
    Tabs,
    Tab,
    VueFormGenerator,
    FieldResumeImage,
    DynamicForm,
  },
  data(){
    return{
      resume: {
        title:'',
        content:{
          basics:{
            location:{},
         
          },
          
        }
      },
      schemas: {
        basics,
        location,
        profiles,
      },
      options: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  }
};
</script>

