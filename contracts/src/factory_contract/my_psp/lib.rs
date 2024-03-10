#![cfg_attr(not(feature = "std"), no_std, no_main)]

pub use self::my_psp::{Token, TokenRef};

#[ink::contract]
mod my_psp {
    use ink::prelude::{string::String, vec::Vec};
    use psp22::{
        PSP22Burnable, PSP22Data, PSP22Error, PSP22Event, PSP22Metadata, PSP22Mintable, PSP22,
    };

    #[ink(storage)]
    pub struct Token {
        data: PSP22Data, // (1)
        name: Option<String>,
        symbol: Option<String>,
        decimals: u8,
        description: Option<String>,
        owner: AccountId,
    }

    impl Token {
        #[ink(constructor)]
        pub fn new(
            supply: u128,
            name: Option<String>,
            symbol: Option<String>,
            decimals: u8,
            description: Option<String>,
            owner: AccountId,
        ) -> Self {
            let (data, events) = PSP22Data::new(supply, owner);
            let contract = Self {
                data,
                name,
                symbol,
                decimals,
                description,
                owner,
            };
            contract.emit_events(events);
            contract
        }

        // A helper function translating a vector of PSP22Events into the proper
        // ink event types (defined internally in this contract) and emitting them.
        // (5)
        fn emit_events(&self, events: Vec<PSP22Event>) {
            for event in events {
                match event {
                    PSP22Event::Transfer { from, to, value } => {
                        self.env().emit_event(Transfer { from, to, value })
                    }
                    PSP22Event::Approval {
                        owner,
                        spender,
                        amount,
                    } => self.env().emit_event(Approval {
                        owner,
                        spender,
                        amount,
                    }),
                }
            }
        }
    }

    // (3)
    #[ink(event)]
    pub struct Approval {
        #[ink(topic)]
        owner: AccountId,
        #[ink(topic)]
        spender: AccountId,
        amount: u128,
    }

    // (3)
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        value: u128,
    }

    // (4)
    impl PSP22 for Token {
        #[ink(message)]
        fn total_supply(&self) -> u128 {
            self.data.total_supply()
        }

        #[ink(message)]
        fn balance_of(&self, owner: AccountId) -> u128 {
            self.data.balance_of(owner)
        }

        #[ink(message)]
        fn allowance(&self, owner: AccountId, spender: AccountId) -> u128 {
            self.data.allowance(owner, spender)
        }

        #[ink(message)]
        fn transfer(
            &mut self,
            to: AccountId,
            value: u128,
            _data: Vec<u8>,
        ) -> Result<(), PSP22Error> {
            let events = self.data.transfer(self.env().caller(), to, value)?;
            self.emit_events(events);
            Ok(())
        }

        #[ink(message)]
        fn transfer_from(
            &mut self,
            from: AccountId,
            to: AccountId,
            value: u128,
            _data: Vec<u8>,
        ) -> Result<(), PSP22Error> {
            let events = self
                .data
                .transfer_from(self.env().caller(), from, to, value)?;
            self.emit_events(events);
            Ok(())
        }

        #[ink(message)]
        fn approve(&mut self, spender: AccountId, value: u128) -> Result<(), PSP22Error> {
            let events = self.data.approve(self.env().caller(), spender, value)?;
            self.emit_events(events);
            Ok(())
        }

        #[ink(message)]
        fn increase_allowance(
            &mut self,
            spender: AccountId,
            delta_value: u128,
        ) -> Result<(), PSP22Error> {
            let events = self
                .data
                .increase_allowance(self.env().caller(), spender, delta_value)?;
            self.emit_events(events);
            Ok(())
        }

        #[ink(message)]
        fn decrease_allowance(
            &mut self,
            spender: AccountId,
            delta_value: u128,
        ) -> Result<(), PSP22Error> {
            let events = self
                .data
                .decrease_allowance(self.env().caller(), spender, delta_value)?;
            self.emit_events(events);
            Ok(())
        }
    }

    impl PSP22Metadata for Token {
        #[ink(message)]
        fn token_name(&self) -> Option<String> {
            self.name.clone()
        }
        #[ink(message)]
        fn token_symbol(&self) -> Option<String> {
            self.symbol.clone()
        }
        #[ink(message)]
        fn token_decimals(&self) -> u8 {
            self.decimals
        }
    }

    impl PSP22Burnable for Token {
        #[ink(message)]
        fn burn(&mut self, value: u128) -> Result<(), PSP22Error> {
            if self.env().caller() != self.owner {
                return Err(PSP22Error::Custom(String::from("Only owner can burn")));
            }
            let events = self.data.burn(self.env().caller(), value)?;
            self.emit_events(events);
            Ok(())
        }
    }

    impl PSP22Mintable for Token {
        #[ink(message)]
        fn mint(&mut self, value: u128) -> Result<(), PSP22Error> {
            if self.env().caller() != self.owner {
                return Err(PSP22Error::Custom(String::from("Only owner can burn")));
            }
            let events = self.data.mint(self.env().caller(), value)?;
            self.emit_events(events);
            Ok(())
        }
    }
}
