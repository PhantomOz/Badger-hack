import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/factory_contract';

export interface CreatedContract {
	from: ReturnTypes.AccountId | null;
	typ: string;
}

