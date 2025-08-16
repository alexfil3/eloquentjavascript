class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels
                .map(({ place, address }) => place != this.place ? p : { place: destination, address})
                .filter(({ place, address }) => place != address);

            return new VillageState(destination, parcels);
        }
    }
}

export default VillageState;