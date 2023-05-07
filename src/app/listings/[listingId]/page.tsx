
import getCurrentUser from "@/src/app/actions/getCurrentUser";
import getListingById from "@/src/app/actions/getListingById";
import getReservations from "@/src/app/actions/getReservations";

import ClientOnly from "@/src/app/components/ClientOnly";
import EmptyState from "@/src/app/components/EmptyState";

import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;
