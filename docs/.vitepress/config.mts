import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Artist Diploma in Music",
  description: "Handbook and Modules for the Artist Diploma in Music",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Handbook', link: '/handbook/' },
      { text: 'Modules', link: '/modules/' },
      
    ],
    search: {
      provider: 'local'
    },

    sidebar: {
      // This sidebar gets displayed when a user
      // is on the `handbook` directory.
      '/handbook/': [
        {
          text: 'Handbook',
          items: [
            { text: 'Introduction', link: '/handbook/' },
            { text: 'Programme Specification', link: '/handbook/programme_specification' },
            { text: 'Learning and Teaching', link: '/handbook/learning_and_teaching' },
            { text: 'Assessment', link: '/handbook/assessment' },
            { items: [ // sub menu not needed any more
              //{ text: 'Programme Summary Details', link: '/handbook/programme_summary_details' },
              //{ text: 'Curriculum Principles and Graduate Attributes', link: '/handbook/curriculum_principles_and_graduate_attributes' },
              //{ text: 'Programme Aims', link: '/handbook/programme_aims' },
              //{ text: 'Programme Learning Outcomes', link: '/handbook/programme_learning_outcomes' },
              //{ text: 'Admission Criteria', link: '/handbook/admission_criteria' },
              //{ text: 'Programme Structure', link: '/handbook/programme_structure' },
              //{ text: 'Programme Content', link: '/handbook/programme_content' },
              // { text: 'Programme Learning Outcomes by Module', link: '/handbook/programme_LOs_by_module' },
              //{ text: 'Benchmarks', link: '/handbook/benchmarks' },
              //{ text: 'Areas of Study', link: '/handbook/areas_of_study' },
            ]}
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on the `modules` directory.
      '/modules/': [
        {
          text: 'Modules',
          items: [
            { text: 'Principal Project', link: '/modules/' },
            { text: 'Module 2', link: '/modules/module02' }
          ]
        }
      ]
    }

  }
})
