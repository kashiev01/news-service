export const dbConfig = () => ({
  db: {
    pg: {
      type: process.env.DATABASE_DRIVER,
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE,
      password: process.env.DATABASE_PASSWORD,
      synchronize: true,
      entities: ['dist/**/*.schema{.ts,.js}'],
      autoLoadEntities: true,
      migrationsRun: false,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: process.env.DATABASE_MIGRATION_TABLE,
    },
  },
});
