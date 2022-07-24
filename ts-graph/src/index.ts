import { chyperCreateTest, driver, session } from './cypher'


async function bootstrap() {
  // await chyperCreateTest({ name: 'amir' })
  await chyperCreateTest({ name: 'vahid' })
  await chyperCreateTest({ name: 'majid' })

  await session.close()
  // on application exit:
  await driver.close()

}

bootstrap();