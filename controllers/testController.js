const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
// prisma.$on('query', (e) => {
//   console.log(e);
// });

const self = {
  async index(req, res) {
    // await prisma.job.create({
    //   data: {
    //     title: {
    //       name: 'kaveh',
    //     },
    //     location: 'tehran',
    //     salary: '41234',
    //     test: 'test',
    //   },

    // });
    const posts = await prisma.post.findMany({
      where: {published: true},
      include: {author: true},
    });

    res.json(posts);
  },
};
module.exports = self;
