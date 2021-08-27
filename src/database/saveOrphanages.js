function saveOrphanages(db, orphanages) {
    return db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "${orphanages.lat}",
        "${orphanages.lng}",
        "${orphanages.name}",
        "${orphanages.about}",
        "${orphanages.whatsapp}",
        "${orphanages.images.toString()}",
        "${orphanages.instructions}",
        "${orphanages.opening_hours}",
        "${orphanages.open_on_weekends}"
    );
    `)
}

module.exports = saveOrphanages