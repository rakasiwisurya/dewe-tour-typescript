import { Stack } from "@mui/material";
import {
  Background,
  Footer,
  Header,
  Notification,
  TourCalculation,
  TourDescription,
  TourImages,
  TourInformationTrip,
  TourTitle,
} from "@/components";
import { useDetailTour } from "@/hooks";

const DetailTour = () => {
  const {
    count,
    total,
    isGroupTourLoading,
    groupTour,
    groupTourErrors,
    handleNotifClose,
    handleCountAdd,
    handleCountSubtract,
    handleBook,
  } = useDetailTour();

  return (
    <>
      <Header />
      <Background showPlant>
        <Stack spacing={5} sx={{ mt: { xs: 22.125, sm: 9 }, py: 8, position: "relative" }}>
          <TourTitle
            isLoading={isGroupTourLoading}
            title={groupTour.title}
            country={groupTour.country_name}
          />
          <TourImages isLoading={isGroupTourLoading} tripImages={groupTour.trip_images} />
          <TourInformationTrip
            isLoading={isGroupTourLoading}
            accomodation={groupTour.accomodation}
            transportation={groupTour.transportation}
            eat={groupTour.eat}
            day={groupTour.day}
            night={groupTour.night}
            dateTrip={groupTour.date_trip}
          />
          <TourDescription isLoading={isGroupTourLoading} description={groupTour.description} />
          <TourCalculation
            isLoading={isGroupTourLoading}
            price={groupTour.price}
            count={count}
            total={total}
            onAdd={handleCountAdd}
            onSubtract={handleCountSubtract}
            onBook={handleBook}
          />
        </Stack>
      </Background>
      <Footer />

      <Notification
        isOpen={!!groupTourErrors}
        onClose={handleNotifClose}
        severity="error"
        message={groupTourErrors}
      />
    </>
  );
};

export default DetailTour;
