// import { contractQuery, decodeOutput } from '@scio-labs/use-inkathon';
// import { useState, useEffect } from 'react';

// const useTokenFetcher = (contract, typedContract, api, activeAccount) => {
//  const [tokenIds, setTokenIds] = useState([]);
//  const [tokenDetails, setTokenDetails] = useState(null);
//  const [isLoading, setIsLoading] = useState(false);
//  const [error, setError] = useState(null);

//  useEffect(() => {
//     const fetchOwnerTokenIds = async () => {
//       setIsLoading(true);
//       try {
//         // Your logic for fetching token IDs
//         // Assuming contractQuery and decodeOutput are defined elsewhere
//         // and are imported or available in this scope
//         const result = await contractQuery(api, '', contract, 'get_owner_token_ids', {}, [
//           activeAccount?.address,
//         ]);
//         const { output, isError, decodedOutput } = decodeOutput(
//           result,
//           contract,
//           'get_owner_token_ids',
//         );
//         if (isError) throw new Error(decodedOutput);

//         // Logic to set tokenIds
//         setTokenIds(decodedOutput); // Assuming decodedOutput is the array of token IDs
//       } catch (e) {
//         setError(e.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     const fetchTokenById = async () => {
//       setIsLoading(true);
//       try {
//         // Your logic for fetching token details by ID
//         // Assuming contractQuery and decodeOutput are defined elsewhere
//         // and are imported or available in this scope
//         const result = await contractQuery(api, '', contract, 'get_token_by_id', {}, [
//           tokenIds?.length - 1,
//         ]);
//         const { output, isError, decodedOutput } = decodeOutput(result, contract, 'get_token_by_id');
//         if (isError) throw new Error(decodedOutput);

//         // Logic to set tokenDetails
//         setTokenDetails(decodedOutput); // Assuming decodedOutput is the token details
//       } catch (e) {
//         setError(e.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOwnerTokenIds();
//     fetchTokenById();
//  }, [contract, typedContract, api, activeAccount]);

//  return { tokenIds, tokenDetails, isLoading, error };
// };

// export default useTokenFetcher;
