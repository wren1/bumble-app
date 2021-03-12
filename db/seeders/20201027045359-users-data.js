'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { email: 'abrams@ghgh.orb', password: '4e8cb088d3ccf23ba0e0', username: 'abrams', profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jervo/128.jpg', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      {
        email: 'jess123@oogie.orb',
        password: 'ddacd54ec97574b962bc25',
        username: 'jess12',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/chrisslowik/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'About Me',
        aboutContent: 'Ad officia aut. Sed non quo voluptatibus saepe velit. Sed autem eum. Vero dolorum aut voluptas consequatur dolor molestias quasi qui voluptate. Dolorem dolor quibusdam mollitia veritatis voluptate aut et et mollitia.',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        email: 'a456@boogie.orb',
        password: 'fb62ccb42fb2869f1b52',
        username: 'al567',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jerrybai1907/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'Hello',
        aboutContent: 'Libero ullam consequatur ut ut ut vero expedita. Et explicabo vero voluptatem. Libero sed voluptatem voluptatem adipisci non.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'alli789@gool.orb',
        password: '6d6b1d3b47132f6fa11df',
        username: 'alyJones',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/anasnakawa/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'About',
        aboutContent: 'Consectetur rerum quia. Esse ex in veniam cumque iste dolorem.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'ollie432@ahoo.orb',
        password: '54cfcb299162aa2bcdc9ed',
        username: 'pickles',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/borges_marcos/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'About Me',
        aboutContent: 'Reprehenderit sed nam ea sed sint eum. Aperiam voluptatem incidunt eligendi et doloremque hic quas. Asperiores omnis eveniet assumenda suscipit non. Qui reiciendis ab eum.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'catcat@yooha.orb',
        password: 'f9dcf8fd6ae7644689',
        username: 'catladee',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/n1ght_coder/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'Me',
        aboutContent: 'Ut facilis quia. Vel aut excepturi et reprehenderit quia.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: '123456@yooha.orb',
        password: '5e33f1aeb03e846552e7c0',
        username: '1874874',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/juamperro/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'hihi',
        aboutContent: 'Incidunt nisi id earum molestias ex velit necessitatibus est. Veritatis temporibus dolor. Enim unde accusantium et in ut hic. Dolorum fuga nam ullam ipsa. Voluptatum quia placeat.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'oogiwoo@yooha.orb',
        password: 'cb3b6731bace307f11653a',
        username: 'gosts',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/horaciobella/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'gosts',
        aboutContent: 'Laudantium et pariatur id debitis minima. Consectetur at voluptatem et vel nostrum. Quo officia asperiores corrupti nostrum tempore quia.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'wawa@yooha.orb',
        password: 'fdf097fc2b7f31cb52fc22',
        username: 'birdbob',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/vimarethomas/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: '',
        aboutContent: 'Est repudiandae omnis beatae omnis natus dignissimos. Dolore ipsam ea ut. Aliquid animi itaque et commodi dolor soluta praesentium quo qui.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'nelni1212@yooha.orb',
        password: 'c44b48398b3da56cc3b3f',
        username: 'lochienes',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/matt3224/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'About',
        aboutContent: 'Rerum quos error omnis est eos porro consequatur odio mollitia. Qui iste iste. Optio expedita cumque non. Hic accusamus impedit commodi.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'catsofcats@yooha.orb',
        password: 'd5fe64112f2594f8b5d812',
        username: 'catmaster',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/manigm/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: '',
        aboutContent: 'My name is Abram. Abram is the name. Abram Abrams',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'latsofcats@yooha.orb',
        password: 'efdba87dfe84d8b4a77670',
        username: 'hmmmmm',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/aaronkwhite/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'Hello World',
        aboutContent: 'Molestiae officiis explicabo dolorem assumenda possimus sunt fugit ipsa.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'jkjk@yooha.orb',
        password: 'e7f98b7131ac3a3243148e',
        username: 'jabras',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/mocabyte/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'Title',
        aboutContent: 'Cupiditate neque et natus eos non placeat. Repellendus qui amet ipsum.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'ovovlov@yooha.orb',
        password: '8a43ca7bd1e24bba1b4841',
        username: 'ovlov',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/harry_sistalam/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'Hi',
        aboutContent: 'Dolores eum aut sed. Aperiam culpa voluptatem rerum nam cupiditate.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'fenri@yooha.orb',
        password: '4d9ff44594a998836bab7',
        username: 'fenree',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/flashmurphy/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'Title Here',
        aboutContent: 'Dolores incidunt molestiae. Magnam id eum et numquam aut. Consequatur ut blanditiis ipsa voluptatem laudantium assumenda cumque nihil consequuntur.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'jessicaat@yooha.orb',
        password: 'd765b099898b8fa0e41f22',
        username: 'orangjuc',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/derekebradley/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'About Me',
        aboutContent: 'My name is Abram. Abram is the name. Abram Abrams',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'vet453@yooha.orb',
        password: '203856e9f1863c194fbfd3',
        username: 'vals77',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/drewbyreese/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'About',
        aboutContent: 'id aut ut doloremque voluptatem. Fugiat quas eaque ut vel. Quisquam possimus pariatur.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'jujubea@yooha.orb',
        password: '2eb933f26619d0df4b3ac0',
        username: 'jujubean',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/mahmoudmetwally/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: '',
        aboutContent: 'Non laborum aut non veniam voluptatibus. Quisquam omnis perspiciatis eos at.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'beepboo@yooha.orb',
        password: 'cb27e3e05262406228fac',
        username: 'beep',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/chrisvanderkooi/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'About Me',
        aboutContent: 'Itaque deleniti fuga reprehenderit dolorum voluptate distinctio eos nulla repellat. Dolores eos ipsa ut aut qui labore ipsum omnis rerum.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'boop@yooha.orb',
        password: 'e94f282ce9283729689',
        username: 'boops',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/osmond/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'About',
        aboutContent: 'Quis a exercitationem aut. Numquam voluptatem quia soluta ipsam rerum. Minus assumenda numquam minus architecto nulla velit.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'fetfer@yooha.orb',
        password: 'f28bd152a8f8a444c2b0f1',
        username: 'fionak43',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/mattbilotti/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: '',
        aboutContent: 'Alias inventore ut fugit molestiae nesciunt omnis at officiis esse. Voluptatem modi maxime cupiditate placeat ullam neque voluptatibus.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'lolop@yooha.orb',
        password: 'c64c53db326daabc43b3f3',
        username: 'lolip',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/carbontwelve/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: 'hi',
        aboutContent: 'Voluptatem facilis qui amet est minima fugiat magnam delectus doloremque. Consectetur in porro sunt non pariatur.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'peterp@yooha.orb',
        password: 'eb9d7dfafa6462109b3557',
        username: 'peter445',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/imammuht/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        aboutTitle: ':)',
        aboutContent: 'Molestiae laboriosam molestias odit omnis. Cumque similique neque.',
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        email: 'jonk@yooha.orb',
        password: 'd4a6fe688174fea7ed492',
        username: 'jjjjj',
        profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/mhudobivnik/128.jpg',
        banner: 'http://placeimg.com/640/480/abstract',
        updatedAt: new Date(),
        createdAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
