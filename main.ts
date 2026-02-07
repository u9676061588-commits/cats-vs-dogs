player.onItemInteracted(IRON_SHOVEL, function () {
    gameplay.setWeather(RAIN)
    for (let index = 0; index < 10; index++) {
    	
    }
    mobs.spawn(OCELOT, pos(0, 0, 0))
    mobs.spawn(WOLF, pos(0, 0, 0))
    builder.place(GRASS)
})
player.onChat("run", function () {
	
})
player.teleport(pos(0, 0, 0))