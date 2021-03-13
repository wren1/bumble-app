'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { email: 'abrams@ghgh.orb', password: '4e8cb088d3ccf23ba0e0', username: 'abrams', profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jervo/128.jpg', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      {
        email: 'jess123@oogie.orb',
        password: 'ddacd54ec97574b962bc25',
        username: 'jess12',
        profilePic: 'https://media.istockphoto.com/vectors/cheeky-face-shy-vector-id1069989648?k=6&m=1069989648&s=612x612&w=0&h=WI_vUhh9CX__3K_6-6gzUV11qXWn4MMwg1NY2kRLG5M=',
        banner: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: 'About Me',
        aboutContent: 'Ad officia aut. Sed non quo voluptatibus saepe velit. Sed autem eum. Vero dolorum aut voluptas consequatur dolor molestias quasi qui voluptate. Dolorem dolor quibusdam mollitia veritatis voluptate aut et et mollitia.',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        email: 'a456@boogie.orb',
        password: 'fb62ccb42fb2869f1b52',
        username: 'al567',
        profilePic: 'https://media.istockphoto.com/vectors/stuck-out-tongue-face-vector-id1069971194?k=6&m=1069971194&s=612x612&w=0&h=rUKnC7QvYHbr5djCHoyciFgVrL6uVKG2tvluLgzp-go=',
        banner: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: 'Hello',
        aboutContent: 'Libero ullam consequatur ut ut ut vero expedita. Et explicabo vero voluptatem. Libero sed voluptatem voluptatem adipisci non.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'alli789@gool.orb',
        password: '6d6b1d3b47132f6fa11df',
        username: 'alyJones',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROA0EUUd7A1XhNRgVq0vrystpahzOAPjWKw&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1542241647-9cbbada2b309?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80',
        aboutTitle: 'About',
        aboutContent: 'Consectetur rerum quia. Esse ex in veniam cumque iste dolorem.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'ollie432@ahoo.orb',
        password: '54cfcb299162aa2bcdc9ed',
        username: 'pickles',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouXnBzjQLo2CRTABlIik1_1DoyMVhPRrGfw&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1694&q=80',
        aboutTitle: 'About Me',
        aboutContent: 'Reprehenderit sed nam ea sed sint eum. Aperiam voluptatem incidunt eligendi et doloremque hic quas. Asperiores omnis eveniet assumenda suscipit non. Qui reiciendis ab eum.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'catcat@yooha.orb',
        password: 'f9dcf8fd6ae7644689',
        username: 'catladee',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQqMurozgRMsi2Vz59-BagXSE31Nn7i0CXg&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: 'Me',
        aboutContent: 'Ut facilis quia. Vel aut excepturi et reprehenderit quia.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: '123456@yooha.orb',
        password: '5e33f1aeb03e846552e7c0',
        username: '1874874',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGn8b-y7KA1bUwppe8Zw87sTg_CQ7B7LNTA&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=80',
        aboutTitle: 'hihi',
        aboutContent: 'Incidunt nisi id earum molestias ex velit necessitatibus est. Veritatis temporibus dolor. Enim unde accusantium et in ut hic. Dolorum fuga nam ullam ipsa. Voluptatum quia placeat.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'oogiwoo@yooha.orb',
        password: 'cb3b6731bace307f11653a',
        username: 'gosts',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-FPwo9XEQEgIL3DSRAx_TN0rNRveKl3iYA&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1542806109-e88b46573e79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: 'gosts',
        aboutContent: 'Laudantium et pariatur id debitis minima. Consectetur at voluptatem et vel nostrum. Quo officia asperiores corrupti nostrum tempore quia.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'wawa@yooha.orb',
        password: 'fdf097fc2b7f31cb52fc22',
        username: 'birdbob',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0nl2D8p7-BqViynGEhiV4mnxtUYVxuwO_A&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1542810104-c5f07c7357ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: '',
        aboutContent: 'Est repudiandae omnis beatae omnis natus dignissimos. Dolore ipsam ea ut. Aliquid animi itaque et commodi dolor soluta praesentium quo qui.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'nelni1212@yooha.orb',
        password: 'c44b48398b3da56cc3b3f',
        username: 'lochienes',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXfE5RIiHO6vxIXA11DVD5_mE_3upnYc84Q&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1542931415-162aeab4418f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80',
        aboutTitle: 'About',
        aboutContent: 'Rerum quos error omnis est eos porro consequatur odio mollitia. Qui iste iste. Optio expedita cumque non. Hic accusamus impedit commodi.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'catsofcats@yooha.orb',
        password: 'd5fe64112f2594f8b5d812',
        username: 'catmaster',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0n_JiOMMovB6EjrO4fiyZqZO1cnNcQswZw&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1542891973-afee23ae9770?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: '',
        aboutContent: 'My name is Abram. Abram is the name. Abram Abrams',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'latsofcats@yooha.orb',
        password: 'efdba87dfe84d8b4a77670',
        username: 'hmmmmm',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BE8m4SFAC9LxaVgd003UICwzQCdpoaq6jg&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80',
        aboutTitle: 'Hello World',
        aboutContent: 'Molestiae officiis explicabo dolorem assumenda possimus sunt fugit ipsa.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'jkjk@yooha.orb',
        password: 'e7f98b7131ac3a3243148e',
        username: 'jabras',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrF6xbcHs_49xe2t_W9xKWZpXWV981cQ2BYA&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1498263382026-c65d01dad017?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: 'Title',
        aboutContent: 'Cupiditate neque et natus eos non placeat. Repellendus qui amet ipsum.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'ovovlov@yooha.orb',
        password: '8a43ca7bd1e24bba1b4841',
        username: 'ovlov',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRJ6QA-qFpk1forQMsfCjxXuJzXn6pudPLw&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1543253539-58c7d1c00c8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2650&q=80',
        aboutTitle: 'Hi',
        aboutContent: 'Dolores eum aut sed. Aperiam culpa voluptatem rerum nam cupiditate.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'fenri@yooha.orb',
        password: '4d9ff44594a998836bab7',
        username: 'fenree',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZB-F69EyEBNZci3hhHNQROaR8ero1Ct6dqg&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1543349689-2f7424422e56?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: 'Title Here',
        aboutContent: 'Dolores incidunt molestiae. Magnam id eum et numquam aut. Consequatur ut blanditiis ipsa voluptatem laudantium assumenda cumque nihil consequuntur.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'jessicaat@yooha.orb',
        password: 'd765b099898b8fa0e41f22',
        username: 'orangjuc',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdfvZFvkiy95CqwnfmGGW7hYcKHMx5N25bw&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1543310465-f4d3ca5a2a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
        aboutTitle: 'About Me',
        aboutContent: 'My name is Abram. Abram is the name. Abram Abrams',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'vet453@yooha.orb',
        password: '203856e9f1863c194fbfd3',
        username: 'vals77',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75LGNHgoksxaTcXVDC4bskl4mvYCAX5RTQQ&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1543227043-f69c82e95af9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80',
        aboutTitle: 'About',
        aboutContent: 'id aut ut doloremque voluptatem. Fugiat quas eaque ut vel. Quisquam possimus pariatur.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'jujubea@yooha.orb',
        password: '2eb933f26619d0df4b3ac0',
        username: 'jujubean',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwNbxvmEByVAP58D2t67Ii5F9zP6PZ_4daQ&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1543182791-0e32488656f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: '',
        aboutContent: 'Non laborum aut non veniam voluptatibus. Quisquam omnis perspiciatis eos at.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'beepboo@yooha.orb',
        password: 'cb27e3e05262406228fac',
        username: 'beep',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gPiQV621_VOS829wE5LLF8jLWikhIjCEyw&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1543227013-d4bb04c3eec8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: 'About Me',
        aboutContent: 'Itaque deleniti fuga reprehenderit dolorum voluptate distinctio eos nulla repellat. Dolores eos ipsa ut aut qui labore ipsum omnis rerum.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'boop@yooha.orb',
        password: 'e94f282ce9283729689',
        username: 'boops',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyiBQv6iE6bZpeynG4pBBvaeV3iqpZ9KMTA&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1543039717-b4d407223b4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1677&q=80',
        aboutTitle: 'About',
        aboutContent: 'Quis a exercitationem aut. Numquam voluptatem quia soluta ipsam rerum. Minus assumenda numquam minus architecto nulla velit.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'fetfer@yooha.orb',
        password: 'f28bd152a8f8a444c2b0f1',
        username: 'fionak43',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOccImOI0pJfQQHOodgB8O23H-F2kx9jHAg&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1543480842-c57cd8d68a01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: '',
        aboutContent: 'Alias inventore ut fugit molestiae nesciunt omnis at officiis esse. Voluptatem modi maxime cupiditate placeat ullam neque voluptatibus.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'lolop@yooha.orb',
        password: 'c64c53db326daabc43b3f3',
        username: 'lolip',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakN1Jdmzrer-Vf-8ZR3_cLPbnUg2XDNeXqQ&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        aboutTitle: 'hi',
        aboutContent: 'Voluptatem facilis qui amet est minima fugiat magnam delectus doloremque. Consectetur in porro sunt non pariatur.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'peterp@yooha.orb',
        password: 'eb9d7dfafa6462109b3557',
        username: 'peter445',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQnEYmS2_dDY0NMmwcd9E-NZxr78DAblW3g&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1488572749058-7f52dd70e0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80',
        aboutTitle: ':)',
        aboutContent: 'Molestiae laboriosam molestias odit omnis. Cumque similique neque.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'jonk@yooha.orb',
        password: 'd4a6fe688174fea7ed492',
        username: 'jjjjj',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHceBuuWE2jkPPUEzx_XQ0SBvkIJTNSBbCyw&usqp=CAU',
        banner: 'https://images.unsplash.com/photo-1503104538136-7491acef4d5d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        updatedAt: new Date(),
        createdAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
