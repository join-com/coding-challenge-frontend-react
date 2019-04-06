const OCCURRED_AT = 1552325609;

class IncidentData {
  constructor(
    id = Math.floor(10000 + Math.random() * 90000),
    title = `Title ${id}`,
    description = `Description ${id}`,
    address = `Address ${id}`,
    occurred_at = OCCURRED_AT,
    updated_at = 1553542734,
    image_url_thumb = 'https://files.bikeindex.org/uploads/Pu/148912/small_IMG_20170705_191324.jpg',
    type = 'Theft',
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.address = address;
    this.occurred_at = occurred_at;
    this.updated_at = updated_at;
    this.media = {
      image_url_thumb,
    };
    this.type = type;
  }
}

// One Incident
export class IncidentModel {
  constructor({
    id,
    title,
    description,
    address,
    occurred_at,
    updated_at,
    image_url_thumb,
    type,
  }) {
    this.incident = new IncidentData(
      id,
      title,
      description,
      address,
      occurred_at,
      updated_at,
      image_url_thumb,
      type,
    );
  }
}

// Many Incidents
export class IncidentsModel {
  constructor(
    ids = [97572, 94547],
  ) {
    this.incidents = ids.map(id => new IncidentData(id));
  }
}


class LocationData {
  constructor(
    id = Math.floor(10000 + Math.random() * 90000),
    occurred_at = OCCURRED_AT,
  ) {
    this.properties = {
      id,
      occurred_at,
    };
    this.geometry = {
      type: 'Point',
      coordinates: [
        -116.1960257,
        43.6334557,
      ],
    };
  }
}

export class LocationsModel {
  constructor(
    ids = [97572],
  ) {
    this.type = 'FeatureCollection';
    this.features = ids.map(id => new LocationData(id));
  }
}
