import path from "path";

export default ({ env }) => {
  const config = env("CONFIGURATION", "dev");
  switch (config) {
    case "dev":
      return {
        connection: {
          client: "sqlite",
          connection: {
            filename: path.join(
              __dirname,
              "..",
              "..",
              env("DATABASE_FILENAME", "database/dev-data.db")
            ),
          },
          useNullAsDefault: true,
        },
      };
    case "prod":
      return {
        connection: {
          client: "mysql",
          connection: {
            host: "localhost",
            user: env("DB_USER"),
            password: env("DB_PASSWORD"),
            database: env("DB_NAME"),
          },
          useNullAsDefault: true,
        },
      };
  }
};
