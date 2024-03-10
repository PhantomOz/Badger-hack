#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod factory_contract {
    use ink::prelude::string::String;
    use ink::prelude::{vec, vec::Vec};
    use ink::storage::Mapping;
    use ink::ToAccountId;
    use my_nft::MyNftRef;
    use my_psp::TokenRef;

    #[ink(event)]
    pub struct CreatedContract {
        from: Option<AccountId>,
        typ: String,
    }

    #[ink(storage)]
    pub struct Factory {
        token_id: Mapping<u128, AccountId>,
        nft_id: Mapping<u128, AccountId>,
        owner_tokenid: Mapping<AccountId, Vec<u128>>,
        owner_nftid: Mapping<AccountId, Vec<u128>>,
        token_count: u128,
        nft_count: u128,
    }

    impl Factory {
        /// Creates a new factory contract initialized.
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                token_id: Mapping::default(),
                nft_id: Mapping::default(),
                owner_tokenid: Mapping::default(),
                owner_nftid: Mapping::default(),
                token_count: 0,
                nft_count: 0,
            }
        }

        /// Returns the current value of `message`.
        #[ink(message)]
        pub fn create_token(
            &mut self,
            supply: u128,
            name: Option<String>,
            symbol: Option<String>,
            description: Option<String>,
            decimal: u8,
            code_hash: Hash,
        ) {
            let from = self.env().caller();
            let new_token = TokenRef::new(
                supply,
                name,
                symbol,
                decimal,
                description,
                self.env().caller(),
            )
            .code_hash(code_hash)
            .endowment(0)
            .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])
            .instantiate();
            let token_address = new_token.to_account_id();
            self.token_id.insert(&self.token_count, &token_address);
            let owner_tokens = self.owner_tokenid.get(from);
            if owner_tokens.is_some() {
                let mut arr = owner_tokens.unwrap();
                arr.push(self.token_count);
                self.owner_tokenid.insert(&from, &arr);
            } else {
                self.owner_tokenid.insert(&from, &vec![self.token_count]);
            }
            self.token_count += 1;
        }

        /// Sets `message` to the given value.
        #[ink(message)]
        pub fn create_nft(&mut self, code_hash: Hash) {
            let from = self.env().caller();
            let new_nft = MyNftRef::new()
                .code_hash(code_hash)
                .endowment(0)
                .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let token_address = new_nft.to_account_id();
            self.nft_id.insert(&self.token_count, &token_address);
            let owner_nfts = self.owner_nftid.get(from);
            if owner_nfts.is_some() {
                let mut arr = owner_nfts.unwrap();
                arr.push(self.nft_count);
                self.owner_nftid.insert(&from, &arr);
            } else {
                self.owner_nftid.insert(&from, &vec![self.nft_count]);
            }
            self.nft_count += 1;
        }

        //get owners token ids
        #[ink(message)]
        pub fn get_owner_token_ids(&self, owner: AccountId) -> Option<Vec<u128>> {
            let token_ids = self.owner_tokenid.get(owner);
            if token_ids.is_some() {
                return Some(token_ids.unwrap());
            }
            None
        }

        //get token by Id
        #[ink(message)]
        pub fn get_token_by_id(&self, id: u128) -> Option<AccountId> {
            let token = self.token_id.get(id);
            if token.is_some() {
                return token;
            }
            None
        }

        //get owners nft ids
        #[ink(message)]
        pub fn get_owner_nft_ids(&self, owner: AccountId) -> Option<Vec<u128>> {
            let nft_ids = self.owner_nftid.get(owner);
            if nft_ids.is_some() {
                return Some(nft_ids.unwrap());
            }
            None
        }

        //get nft by id
        #[ink(message)]
        pub fn get_nft_by_id(&self, id: u128) -> Option<AccountId> {
            let nft = self.nft_id.get(id);
            if nft.is_some() {
                return nft;
            }
            None
        }
    }

    // #[cfg(test)]
    // mod tests {
    //     use super::*;

    //     #[ink::test]
    //     fn new_works() {
    //         let message = "Hello ink! v4".to_string();
    //         let greeter = Greeter::new(message.clone());
    //         assert_eq!(greeter.greet(), message);
    //     }

    //     #[ink::test]
    //     fn default_new_works() {
    //         let greeter = Greeter::default();
    //         let default_message = String::from("Hello ink!");
    //         assert_eq!(greeter.greet(), default_message);
    //     }

    //     #[ink::test]
    //     fn set_message_works() {
    //         let message_1 = String::from("gm ink!");
    //         let mut greeter = Greeter::new(message_1.clone());
    //         assert_eq!(greeter.greet(), message_1);
    //         let message_2 = String::from("gn");
    //         greeter.set_message(message_2.clone());
    //         assert_eq!(greeter.greet(), message_2);
    //     }
    // }
}
