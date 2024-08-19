"use client";
import React from "react";

import {
	LiveblocksProvider,
	ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUser } from "@/lib/actions/user.actions";

const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<LiveblocksProvider
			resolveUsers={async ({ userIds }) => {
				const users = await getClerkUser({ userIds });
				return users;
			}}
			authEndpoint="/api/liveblocks-auth"
		>
			<ClientSideSuspense fallback={<Loader />}>
				{children}
			</ClientSideSuspense>
		</LiveblocksProvider>
	);
};

export default Provider;
