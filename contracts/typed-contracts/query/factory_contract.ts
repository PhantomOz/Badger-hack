/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/factory_contract';
import type * as ReturnTypes from '../types-returns/factory_contract';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/factory_contract.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;
	readonly __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		nativeApi : ApiPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
		this.__apiPromise = nativeApi;
	}

	/**
	* createToken
	*
	* @param { (string | number | BN) } supply,
	* @param { string | null } name,
	* @param { string | null } symbol,
	* @param { string | null } description,
	* @param { (number | string | BN) } decimal,
	* @param { ArgumentTypes.Hash } codeHash,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"createToken" (
		supply: (string | number | BN),
		name: string | null,
		symbol: string | null,
		description: string | null,
		decimal: (number | string | BN),
		codeHash: ArgumentTypes.Hash,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createToken", [supply, name, symbol, description, decimal, codeHash], __options , (result) => { return handleReturnType(result, getTypeDescription(5, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* createNft
	*
	* @param { ArgumentTypes.Hash } codeHash,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"createNft" (
		codeHash: ArgumentTypes.Hash,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createNft", [codeHash], __options , (result) => { return handleReturnType(result, getTypeDescription(5, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getOwnerTokenIds
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { Result<Array<ReturnNumber> | null, ReturnTypes.LangError> }
	*/
	"getOwnerTokenIds" (
		owner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<ReturnNumber> | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getOwnerTokenIds", [owner], __options , (result) => { return handleReturnType(result, getTypeDescription(11, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getTokenById
	*
	* @param { (string | number | BN) } id,
	* @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
	*/
	"getTokenById" (
		id: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getTokenById", [id], __options , (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getOwnerNftIds
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { Result<Array<ReturnNumber> | null, ReturnTypes.LangError> }
	*/
	"getOwnerNftIds" (
		owner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<ReturnNumber> | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getOwnerNftIds", [owner], __options , (result) => { return handleReturnType(result, getTypeDescription(11, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getNftById
	*
	* @param { (string | number | BN) } id,
	* @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
	*/
	"getNftById" (
		id: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getNftById", [id], __options , (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

}