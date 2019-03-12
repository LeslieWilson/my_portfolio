import React from 'react';
import Project_1_Amazon from '../scenes/projects/components/mygridlist/images/gridlist/Project_1_Amazon.jpg';
import Project_2_Circus from '../scenes/projects/components/mygridlist/images/gridlist/Project_2_Circus.jpg';
import Project_3_Newark from '../scenes/projects/components/mygridlist/images/gridlist/Project_3_Newark.jpg';




const gridlistData=[
    {
        img:Project_1_Amazon,
        title: 'first',
        author: 'blah',
        cols: 1,
        link:'/project1',

    },

    {
        img:Project_2_Circus,
        title: 'second',
        author:'bloo',
        cols: 1,
        link: '/project2',
    },

    {
        img:Project_3_Newark,
        title: 'third',
        author: 'bee',
        cols: 1,
        link: '/project3',

    },

    
];




export default gridlistData;
