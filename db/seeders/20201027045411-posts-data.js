'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        type: 'text',
        title: 'Post Header',
        content: 'Molestiae laboriosam molestias odit omnis. Cumque similique neque.',
        imgUrl: '',
        createdAt: new Date('2020-09-02T17:32:13.509Z'),
        updatedAt: new Date('2020-09-02T17:32:13.509Z')
      },
      {
        userId: 2,
        type: 'text',
        title: 'Header',
        content: 'Veniam aliquid voluptas laboriosam. Dolore dolore quidem reiciendis dolore nostrum. Et repellat rerum atque quo. Consequatur in officia exercitationem nihil. Quaerat explicabo ullam qui. Sint aperiam deserunt quod.',
        imgUrl: '',
        createdAt: new Date('2020-01-21T11:06:33.304Z'),
        updatedAt: new Date('2020-01-21T11:06:33.304Z')
      },
      {
        userId: 3,
        type: 'text',
        title: 'Post Header',
        content: 'Molestiae laboriosam molestias odit omnis. Cumque similique neque.',
        imgUrl: '',
        createdAt: new Date('2020-04-10T21:21:13.951Z'),
        updatedAt: new Date('2020-04-10T21:21:13.951Z')
      },
      {
        userId: 4,
        type: 'text',
        title: 'Test',
        content: 'Enim et nemo perspiciatis quo. Iusto dolor cupiditate est error deleniti cum expedita quaerat. Dolorum beatae quis accusantium deleniti quo voluptates. Veritatis earum odit eos quis. Ea ab non nulla aut facere dolor.',
        imgUrl: '',
        createdAt: new Date('2020-10-23T15:14:39.795Z'),
        updatedAt: new Date('2020-10-23T15:14:39.795Z')
      },
      {
        userId: 5,
        type: 'text',
        title: 'Post Header',
        content: 'Excepturi consequatur ducimus aliquid libero. Vero in sunt quia voluptatem veniam. Qui culpa aut minus et ipsum. Qui doloribus esse aliquam dolore vitae dolorum minima dolores.Cumque at corporis voluptatem ducimus.Eligendi ut nisi occaecati fuga voluptas architecto asperiores rerum quasi.Tenetur ipsa animi omnis molestiae dolorum molestiae dignissimos et.',
        imgUrl: '',
        createdAt: new Date('2020-08-27T23:02:49.040Z'),
        updatedAt: new Date('2020-08-27T23:02:49.040Z')
      },
      {
        userId: 6,
        type: 'text',
        title: 'Post Header',
        content: 'Itaque minima repudiandae unde consequatur tempora nulla ea. Dicta maxime ut laudantium odit perferendis. Ducimus quisquam quisquam.',
        imgUrl: '',
        createdAt: new Date('2020-07-26T21:31:37.294Z'),
        updatedAt: new Date('2020-07-26T21:31:37.294Z')
      },
      {
        userId: 1,
        type: 'text',
        title: 'Post Header',
        content: 'Quia pariatur possimus enim suscipit sit omnis. Neque quia quis rem molestiae minus cumque consectetur. Officia aut dolores eum. Et et ex commodi qui aperiam dicta.Ut corrupti quia voluptatem est molestias.Officiis in qui ratione assumenda adipisci qui.Quae quia soluta consequuntur error similique et dolorum tempore.',
        imgUrl: '',
        createdAt: new Date('2020-09-29T22:33:00.743Z'),
        updatedAt: new Date('2020-09-29T22:33:00.743Z')
      },
      {
        userId: 2,
        type: 'text',
        title: 'Post Header',
        content: 'Vitae blanditiis sed molestias harum neque ab reiciendis tempore accusantium. Molestiae itaque debitis dignissimos et voluptas voluptatem dolorem nesciunt asperiores. Labore architecto dolor adipisci.',
        imgUrl: '',
        createdAt: new Date('2020-01-03T19:08:53.984Z'),
        updatedAt: new Date('2020-01-03T19:08:53.984Z')
      },
      {
        userId: 3,
        type: 'text',
        title: 'Post Header',
        content: 'Sed architecto necessitatibus tempore rerum alias est adipisci. Provident distinctio non omnis aut repudiandae pariatur molestiae. Iusto at ratione tempore earum ut illum incidunt reprehenderit qui. Illum doloremque enim distinctio rerum asperiores nemo. Similique quos aut expedita quasi qui tempore voluptatum quas est. Sequi expedita neque deserunt ratione harum odit.',
        imgUrl: '',
        createdAt: new Date('2020-10-25T23:25:00.837Z'),
        updatedAt: new Date('2020-10-25T23:25:00.837Z')
      },
      {
        userId: 4,
        type: 'text',
        title: 'Post Header',
        content: 'Debitis dolorem veritatis et earum quaerat. Perferendis quos est similique dolore molestiae impedit natus perferendis. Ipsum iusto maxime molestias aut ut quis laboriosam asperiores. Suscipit cupiditate provident iure est porro veniam.',
        imgUrl: '',
        createdAt: new Date('2020-01-23T14:22:44.151Z'),
        updatedAt: new Date('2020-01-23T14:22:44.151Z')
      },
      {
        userId: 5,
        type: 'image',
        imgUrl: 'https://timesofindia.indiatimes.com/photo/67586673.cms',
        createdAt: new Date('2020-09-05T02:15:49.780Z'),
        updatedAt: new Date('2020-09-05T02:15:49.780Z')
      },
      {
        userId: 6,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        createdAt: new Date('2020-03-10T14:11:23.423Z'),
        updatedAt: new Date('2020-03-10T14:11:23.423Z')
      },
      {
        userId: 1,
        type: 'image',
        imgUrl: 'https://www.iams.com/images/default-source/article-image/article_stomach-issues-in-cats-why-cats-vomit-and-what-to-do_header.jpg',
        createdAt: new Date('2020-10-13T06:33:35.426Z'),
        updatedAt: new Date('2020-10-13T06:33:35.426Z')
      },
      {
        userId: 2,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png',
        createdAt: new Date('2020-01-06T03:30:24.594Z'),
        updatedAt: new Date('2020-01-06T03:30:24.594Z')
      },
      {
        userId: 3,
        type: 'image',
        imgUrl: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/02/021520_cats_feat_opt2-1028x579.jpg',
        createdAt: new Date('2020-10-17T06:05:11.283Z'),
        updatedAt: new Date('2020-10-17T06:05:11.283Z')
      },
      {
        userId: 4,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'http://placeimg.com/640/480/animals',
        createdAt: new Date('2020-07-28T13:53:11.028Z'),
        updatedAt: new Date('2020-07-28T13:53:11.028Z')
      },
      {
        userId: 5,
        type: 'image',
        imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg',
        createdAt: new Date('2020-10-24T09:55:59.675Z'),
        updatedAt: new Date('2020-10-24T09:55:59.675Z')
      },
      {
        userId: 6,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYwNjI4NTczNjMwMTc4ODYy/viking-cat-promo-466250194.jpg',
        createdAt: new Date('2020-10-03T10:03:58.781Z'),
        updatedAt: new Date('2020-10-03T10:03:58.781Z')
      },
      {
        userId: 1,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://www.catster.com/wp-content/uploads/2016/11/vet-cat-vomit-57125178-600x574.jpg',
        createdAt: new Date('2020-10-24T06:25:51.810Z'),
        updatedAt: new Date('2020-10-24T06:25:51.810Z')
      },
      {
        userId: 2,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'http://placeimg.com/640/480/animals',
        createdAt: new Date('2020-07-14T17:00:00.926Z'),
        updatedAt: new Date('2020-07-14T17:00:00.926Z')
      },
      {
        userId: 3,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://s3-eu-west-1.amazonaws.com/barkibu-blog/blog+images/vomitos-en-gatos-cuando-deberia-preocuparme/gato_vomitos.png',
        createdAt: new Date('2020-08-04T07:02:46.206Z'),
        updatedAt: new Date('2020-08-04T07:02:46.206Z')
      },
      {
        userId: 4,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://cf.ltkcdn.net/cats/images/std/216289-677x450-What-happened.jpg',
        createdAt: new Date('2020-03-05T22:40:16.095Z'),
        updatedAt: new Date('2020-03-05T22:40:16.095Z')
      },
      {
        userId: 5,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://i.ytimg.com/vi/5r32HezYDS4/maxresdefault.jpg',
        createdAt: new Date('2020-10-16T12:16:11.930Z'),
        updatedAt: new Date('2020-10-16T12:16:11.930Z')
      },
      {
        userId: 6,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://images.medicanimal.com/image/upload/v1568124056/pethub/Kitten.jpg',
        createdAt: new Date('2020-06-22T16:18:37.604Z'),
        updatedAt: new Date('2020-06-22T16:18:37.604Z')
      }, {
        userId: 1,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://www.sciencenews.org/wp-content/uploads/2020/02/021520_catallergies_main.jpg',
        createdAt: new Date('2020-08-21T09:56:40.723Z'),
        updatedAt: new Date('2020-08-21T09:56:40.723Z')
      }, {
        userId: 2,
        type: 'image',
        content: 'Facere nihil eos in sunt nostrum sit ipsam. Quis itaque distinctio velit dolor sed soluta ut.',
        imgUrl: 'https://cdn.mos.cms.futurecdn.net/yzV5i2F35i9RozwSeFLPJV.jpg',
        createdAt: new Date('2020-04-28T01:30:49.590Z'),
        updatedAt: new Date('2020-04-28T01:30:49.590Z')
      }, {
        userId: 3,
        type: 'image',
        content: 'Molestiae laboriosam molestias odit omnis. Cumque similique neque.',
        imgUrl: '',
        createdAt: new Date('2020-08-29T16:29:33.204Z'),
        updatedAt: new Date('2020-08-29T16:29:33.204Z')
      }, {
        userId: 4,
        type: 'quote',
        title: 'Oh Barnacles!',
        content: 'Spongebob',
        imgUrl: '',
        createdAt: new Date('2020-01-02T19:01:39.109Z'),
        updatedAt: new Date('2020-01-02T19:01:39.109Z')
      }, {
        userId: 5,
        type: 'video',
        content: 'Molestiae laboriosam molestias odit omnis. Cumque similique neque.',
        imgUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        createdAt: new Date('2020-08-06T02:25:02.119Z'),
        updatedAt: new Date('2020-08-06T02:25:02.119Z')
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
