// pages/name.tsx
import { trpc } from '../utils/trpc';

export default function Name() {
	const nameQuery = trpc.useQuery(['name.getName', { name: 'Mazen' }]);

	return (
		<>
			{nameQuery.data ? (
				<h1>{nameQuery.data.greeting}</h1>
			) : (
				<span>Loading...</span>
			)}
		</>
	);
}
