import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/internals';
import { GENERATOR_NAME } from './constants'

const { version } = require('../package.json')

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {

    logger.info('\n\n==== Print Documentation on MODELS:')
    options.dmmf.datamodel.models.map(m => {
      logger.info(`MODEL "${m.name}" -- docs: "${m.documentation}"`);

      m.fields.map( f => {
        logger.info(`FIELD "${f.name}" -- docs: "${f.documentation}"`);
      })
    })
   
    logger.info('\n\n==== Print Documentation on TYPES:')
    options.dmmf.datamodel.types.map(t => {
      logger.info(`TYPE "${t.name}" -- docs: "${t.documentation}"`);

      t.fields.map( f => {
        logger.info(`FIELD "${f.name}" -- docs: "${f.documentation}"`);
      })
    })

    logger.info('\n\n DMMF Datamodel:')
    logger.info(JSON.stringify(options.dmmf.datamodel, null, 2))
  },
})
