/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/factory_contract';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
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
	*/
	"createToken" (
		supply: (string | number | BN),
		name: string | null,
		symbol: string | null,
		description: string | null,
		decimal: (number | string | BN),
		codeHash: ArgumentTypes.Hash,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createToken", [supply, name, symbol, description, decimal, codeHash], __options);
	}

	/**
	 * createNft
	 *
	 * @param { ArgumentTypes.Hash } codeHash,
	*/
	"createNft" (
		codeHash: ArgumentTypes.Hash,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createNft", [codeHash], __options);
	}

	/**
	 * getOwnerTokenIds
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	*/
	"getOwnerTokenIds" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getOwnerTokenIds", [owner], __options);
	}

	/**
	 * getTokenById
	 *
	 * @param { (string | number | BN) } id,
	*/
	"getTokenById" (
		id: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getTokenById", [id], __options);
	}

	/**
	 * getOwnerNftIds
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	*/
	"getOwnerNftIds" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getOwnerNftIds", [owner], __options);
	}

	/**
	 * getNftById
	 *
	 * @param { (string | number | BN) } id,
	*/
	"getNftById" (
		id: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getNftById", [id], __options);
	}

}