import { Repository, EntityRepository } from "typeorm";
import { compliment } from "../entities/Compliment";

class ComplimentsRepositories extends Repository<compliment> {}

export { ComplimentsRepositories };
