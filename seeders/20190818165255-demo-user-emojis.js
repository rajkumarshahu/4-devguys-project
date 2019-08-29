'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('user_emojis', [
      {
        user_id: 1,
        emoji_id: 2,
        updatedAt: '2019-08-19 23:24:46',
        user_comment: 'Ignorance is a blank sheet on which we may write; but error is a scribbled one from which we must first erase.',
      },
      {
        user_id: 1,
        emoji_id: 3,
        updatedAt: '2019-08-20 23:24:46',
        user_comment: 'Honest error is to be pitied, not ridiculed.',
      },
      {
        user_id: 1,
        emoji_id: 5,
        updatedAt: '2019-08-21 23:24:46',
        user_comment: 'It is almost as difficult to make a man unlearn his errors as his knowledge.',
      },
      {
        user_id: 1,
        emoji_id: 100,
        updatedAt: '2019-08-22 23:24:46',
        user_comment: 'We come to learn that it does not pay to grieve too much over our errors. Ordinarily we try to do the best we can.',
      },
      {
        user_id: 1,
        emoji_id: 50,
        updatedAt: '2019-08-23 23:24:46',
        user_comment: 'Hello how are you',
      },
      {
        user_id: 1,
        emoji_id: 49,
        updatedAt: '2019-08-24 23:24:46',
        user_comment: 'We should not look back unless it is to derive useful lessons from past errors, and for the purpose of profiting by dearly bought experience. Read more at https://www.brainyquote.com/topics/errors',
      },
      {
        user_id: 1,
        emoji_id: 101,
        updatedAt: '2019-08-25 23:24:46',
        user_comment: 'Hello how are you7',
      },
      {
        user_id: 2,
        emoji_id: 2,
        updatedAt: '2019-08-23 23:24:46',
        user_comment: 'I beseech you, in the bowels of Christ, think it possible you may be mistaken.',
      },
      {
        user_id: 2,
        emoji_id: 3,
        updatedAt: '2019-08-23 23:24:46',
        user_comment: 'We should not look back unless it is to derive useful lessons from past errors, and for the purpose of profiting by dearly bought experience. Read more at https://www.brainyquote.com/topics/errors',
      },
      {
        user_id: 2,
        emoji_id: 5,
        updatedAt: '2019-08-24 23:24:46',
        user_comment: 'Hello how are you10',
      },
      {
        user_id: 3,
        emoji_id: 2,
        updatedAt: '2019-08-25 23:24:46',
        user_comment: 'Hello how are you11',
      },
      {
        user_id: 3,
        emoji_id: 3,
        updatedAt: '2019-08-26 23:24:46',
        user_comment: 'The world always makes the assumption that the exposure of an error is identical with the discovery of the truth-that error and truth are simply opposite. They are nothing of the sort. What the world turns to, when it is cured of one error, is usually sim',
      },
      {
        user_id: 3,
        emoji_id: 5,
        updatedAt: '2019-08-27 23:24:46',
        user_comment: 'Error is the biggest teacher of programmers.',
      },{
        user_id: 4,
        emoji_id: 2,
        updatedAt: '2019-08-28 23:24:46',
        user_comment: 'The credit belongs to the man who is actually in the arena; whose face is marred with dust and sweat; who strives valiantly; who errs and may fall again and again, because there is no effort without error or shortcoming.',
      },
      {
        user_id: 4,
        emoji_id: 3,
        updatedAt: '2019-08-29 23:24:46',
        user_comment: 'The pain that others give passes away in their later kindness, but that of our own blunders, especially when they hurt our vanity, never passes away.',
      },
      {
        user_id: 4,
        emoji_id: 5,
        updatedAt: '2019-08-30 23:24:46',
        user_comment: 'Man is made for error; it enters his mind naturally, and he discovers a few truths only with the greatest effort.',
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('user_emojis', null, {});
  }
};
