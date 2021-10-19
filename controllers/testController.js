const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const self = {
  async index(req, res) {
    await prisma.job.create({
      data: {
        title: {
          name: 'kaveh',
        },
        location: 'tehran',
        salary: '41234',
        test: 'test',
      },

    });
    const job1 = await prisma.job.findMany();
    res.json(job1);
  },
};
module.exports = self;
