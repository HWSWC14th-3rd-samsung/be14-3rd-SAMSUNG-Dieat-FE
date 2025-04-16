// export const sampleMeals = [
//   {'name': '카레라이스', 'time': '오전 8:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/08/29/2bad7206644f82f63d339b11c7344dc61.jpg', 'ingredients': '카레, 감자, 당근, 밥', 'calories': 509, 'carbs': 93, 'protein': 27, 'fat': 14, 'sugar': 6, 'date': '2025-04-01'}, 
//   {'name': '치킨 샐러드', 'time': '오후 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 547, 'carbs': 88, 'protein': 10, 'fat': 14, 'sugar': 7, 'date': '2025-04-01'}, 
//   {'name': '된장찌개와 밥', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/15/cf051e4a6788339bdb6dcb687d6960851.jpg', 'ingredients': '된장, 애호박, 두부, 고추', 'calories': 426, 'carbs': 72, 'protein': 37, 'fat': 12, 'sugar': 7, 'date': '2025-04-01'}, 
//   {'name': '치킨 샐러드', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 340, 'carbs': 51, 'protein': 17, 'fat': 19, 'sugar': 8, 'date': '2025-04-02'}, 
//   {'name': '계란말이 도시락', 'time': '오전 8:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/10/06822a9fe6e7213aeb0e3fb0ff19ee3c1.jpg', 'ingredients': '계란, 밥, 김, 햄', 'calories': 597, 'carbs': 75, 'protein': 37, 'fat': 7, 'sugar': 4, 'date': '2025-04-02'}, 
//   {'name': '샌드위치', 'time': '오후 6:00', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 271, 'carbs': 91, 'protein': 38, 'fat': 9, 'sugar': 8, 'date': '2025-04-02'}, 
//   {'name': '오트밀 바나나', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 326, 'carbs': 84, 'protein': 24, 'fat': 14, 'sugar': 2, 'date': '2025-04-03'}, 
//   {'name': '샌드위치', 'time': '오전 7:30', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 482, 'carbs': 83, 'protein': 16, 'fat': 19, 'sugar': 2, 'date': '2025-04-03'}, 
//   {'name': '치킨 샐러드', 'time': '오후 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 518, 'carbs': 38, 'protein': 39, 'fat': 19, 'sugar': 7, 'date': '2025-04-03'}, 
//   {'name': '카레라이스', 'time': '오후 6:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/08/29/2bad7206644f82f63d339b11c7344dc61.jpg', 'ingredients': '카레, 감자, 당근, 밥', 'calories': 468, 'carbs': 92, 'protein': 35, 'fat': 5, 'sugar': 4, 'date': '2025-04-03'}, 
//   {'name': '카레라이스', 'time': '오전 11:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/08/29/2bad7206644f82f63d339b11c7344dc61.jpg', 'ingredients': '카레, 감자, 당근, 밥', 'calories': 309, 'carbs': 36, 'protein': 38, 'fat': 12, 'sugar': 6, 'date': '2025-04-04'}, 
//   {'name': '계란말이 도시락', 'time': '오후 6:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/10/06822a9fe6e7213aeb0e3fb0ff19ee3c1.jpg', 'ingredients': '계란, 밥, 김, 햄', 'calories': 309, 'carbs': 89, 'protein': 27, 'fat': 16, 'sugar': 3, 'date': '2025-04-04'}, 
//   {'name': '된장찌개와 밥', 'time': '오전 11:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/15/cf051e4a6788339bdb6dcb687d6960851.jpg', 'ingredients': '된장, 애호박, 두부, 고추', 'calories': 556, 'carbs': 33, 'protein': 18, 'fat': 17, 'sugar': 4, 'date': '2025-04-04'}, 
//   {'name': '샌드위치', 'time': '오전 11:30', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 345, 'carbs': 32, 'protein': 30, 'fat': 6, 'sugar': 3, 'date': '2025-04-04'}, 
//   {'name': '계란말이 도시락', 'time': '오후 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/10/06822a9fe6e7213aeb0e3fb0ff19ee3c1.jpg', 'ingredients': '계란, 밥, 김, 햄', 'calories': 355, 'carbs': 97, 'protein': 22, 'fat': 20, 'sugar': 3, 'date': '2025-04-05'}, 
//   {'name': '오트밀 바나나', 'time': '오전 8:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 317, 'carbs': 85, 'protein': 29, 'fat': 9, 'sugar': 9, 'date': '2025-04-05'}, 
//   {'name': '치킨 샐러드', 'time': '오후 6:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 476, 'carbs': 64, 'protein': 30, 'fat': 11, 'sugar': 3, 'date': '2025-04-05'}, 
//   {'name': '치킨 샐러드', 'time': '오후 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 288, 'carbs': 54, 'protein': 34, 'fat': 7, 'sugar': 2, 'date': '2025-04-06'}, 
//   {'name': '오트밀 바나나', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 362, 'carbs': 35, 'protein': 16, 'fat': 15, 'sugar': 8, 'date': '2025-04-06'}, 
//   {'name': '샌드위치', 'time': '오후 7:30', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 486, 'carbs': 58, 'protein': 14, 'fat': 10, 'sugar': 4, 'date': '2025-04-06'}, 
//   {'name': '오트밀 바나나', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 303, 'carbs': 50, 'protein': 36, 'fat': 14, 'sugar': 5, 'date': '2025-04-07'}, 
//   {'name': '카레라이스', 'time': '오전 8:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/08/29/2bad7206644f82f63d339b11c7344dc61.jpg', 'ingredients': '카레, 감자, 당근, 밥', 'calories': 506, 'carbs': 79, 'protein': 21, 'fat': 19, 'sugar': 4, 'date': '2025-04-07'}, 
//   {'name': '치킨 샐러드', 'time': '오후 1:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 294, 'carbs': 36, 'protein': 27, 'fat': 15, 'sugar': 9, 'date': '2025-04-07'}, 
//   {'name': '된장찌개와 밥', 'time': '오후 6:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/15/cf051e4a6788339bdb6dcb687d6960851.jpg', 'ingredients': '된장, 애호박, 두부, 고추', 'calories': 444, 'carbs': 82, 'protein': 24, 'fat': 17, 'sugar': 7, 'date': '2025-04-07'}, 
//   {'name': '샌드위치', 'time': '오전 11:30', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 291, 'carbs': 60, 'protein': 30, 'fat': 5, 'sugar': 9, 'date': '2025-04-08'}, 
//   {'name': '오트밀 바나나', 'time': '오전 9:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 461, 'carbs': 52, 'protein': 19, 'fat': 12, 'sugar': 8, 'date': '2025-04-08'}, 
//   {'name': '된장찌개와 밥', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/15/cf051e4a6788339bdb6dcb687d6960851.jpg', 'ingredients': '된장, 애호박, 두부, 고추', 'calories': 566, 'carbs': 52, 'protein': 39, 'fat': 16, 'sugar': 9, 'date': '2025-04-08'}, 
//   {'name': '샌드위치', 'time': '오전 8:00', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 424, 'carbs': 38, 'protein': 28, 'fat': 14, 'sugar': 3, 'date': '2025-04-09'}, 
//   {'name': '치킨 샐러드', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 730, 'carbs': 87, 'protein': 15, 'fat': 14, 'sugar': 5, 'date': '2025-04-09'}, 
//   {'name': '오트밀 바나나', 'time': '오후 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 449, 'carbs': 85, 'protein': 35, 'fat': 14, 'sugar': 10, 'date': '2025-04-09'}, 
//   {'name': '된장찌개와 밥', 'time': '오후 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/15/cf051e4a6788339bdb6dcb687d6960851.jpg', 'ingredients': '된장, 애호박, 두부, 고추', 'calories': 960, 'carbs': 55, 'protein': 26, 'fat': 7, 'sugar': 3, 'date': '2025-04-10'}, 
//   {'name': '오트밀 바나나', 'time': '오후 1:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 1137, 'carbs': 75, 'protein': 20, 'fat': 15, 'sugar': 7, 'date': '2025-04-10'}, 
//   {'name': '치킨 샐러드', 'time': '오전 11:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 900, 'carbs': 76, 'protein': 19, 'fat': 9, 'sugar': 10, 'date': '2025-04-10'}, 
//   {'name': '샌드위치', 'time': '오후 7:30', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 426, 'carbs': 87, 'protein': 15, 'fat': 8, 'sugar': 2, 'date': '2025-04-11'}, 
//   {'name': '된장찌개와 밥', 'time': '오전 8:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/15/cf051e4a6788339bdb6dcb687d6960851.jpg', 'ingredients': '된장, 애호박, 두부, 고추', 'calories': 910, 'carbs': 89, 'protein': 27, 'fat': 13, 'sugar': 6, 'date': '2025-04-11'}, 
//   {'name': '오트밀 바나나', 'time': '오전 9:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 780, 'carbs': 34, 'protein': 26, 'fat': 8, 'sugar': 2, 'date': '2025-04-11'}, 
//   {'name': '계란말이 도시락', 'time': '오후 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/10/06822a9fe6e7213aeb0e3fb0ff19ee3c1.jpg', 'ingredients': '계란, 밥, 김, 햄', 'calories': 550, 'carbs': 40, 'protein': 14, 'fat': 9, 'sugar': 9, 'date': '2025-04-12'}, 
//   {'name': '샌드위치', 'time': '오전 11:30', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 331, 'carbs': 77, 'protein': 39, 'fat': 12, 'sugar': 4, 'date': '2025-04-12'}, 
//   {'name': '된장찌개와 밥', 'time': '오전 8:00', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/15/cf051e4a6788339bdb6dcb687d6960851.jpg', 'ingredients': '된장, 애호박, 두부, 고추', 'calories': 303, 'carbs': 57, 'protein': 35, 'fat': 12, 'sugar': 9, 'date': '2025-04-12'}, 
//   {'name': '치킨 샐러드', 'time': '오전 11:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', 'ingredients': '닭가슴살, 양상추, 드레싱', 'calories': 293, 'carbs': 58, 'protein': 20, 'fat': 18, 'sugar': 6, 'date': '2025-04-13'}, 
//   {'name': '오트밀 바나나', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/fd02df8d8d42fffe09f1fd8aa8f1c8e21.jpg', 'ingredients': '귀리, 바나나, 우유, 꿀', 'calories': 378, 'carbs': 98, 'protein': 10, 'fat': 19, 'sugar': 2, 'date': '2025-04-13'}, 
//   {'name': '계란말이 도시락', 'time': '오전 7:30', 'image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/10/06822a9fe6e7213aeb0e3fb0ff19ee3c1.jpg', 'ingredients': '계란, 밥, 김, 햄', 'calories': 254, 'carbs': 41, 'protein': 20, 'fat': 14, 'sugar': 10, 'date': '2025-04-13'}, 
//   {'name': '샌드위치', 'time': '오전 11:30', 'image': 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg', 'ingredients': '식빵, 햄, 치즈, 양상추', 'calories': 552, 'carbs': 70, 'protein': 20, 'fat': 17, 'sugar': 6, 'date': '2025-04-13'},
//   {name: '닭가슴살 샐러드', time: '오전 8:30', image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/03/15/80905cb4297f54ee1a3dc306e34497571.jpg', ingredients: '닭가슴살, 양상추, 방울토마토, 드레싱', calories: 380, carbs: 180, protein: 35, fat: 8, sugar: 4, date: '2025-04-14'},
//   { name: '연어 덮밥', time: '오전 11:50', image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/15/cf051e4a6788339bdb6dcb687d6960851.jpg', ingredients: '연어, 현미밥, 양파, 간장소스', calories: 420, carbs: 45, protein: 30, fat: 15, sugar: 5, date: '2025-04-14'},
//   { name: '계란 토스트', time: '오전 7:30', image: 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg?size=800x800', ingredients: '통밀식빵, 달걀, 치즈, 우유', calories: 320, carbs: 28, protein: 18, fat: 12, sugar: 6, date: '2025-04-14'},
//   { name: '쇠고기 미역국과 밥', time: '오후 1:10', image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/08/29/2bad7206644f82f63d339b11c7344dc61.jpg', ingredients: '소고기, 미역, 참기름, 쌀밥', calories: 460, carbs: 50, protein: 25, fat: 14, sugar: 3, date: '2025-04-14'},
//   { name: '두부김치', time: '오후 6:40', image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/10/06822a9fe6e7213aeb0e3fb0ff19ee3c1.jpg', ingredients: '두부김치 먹었는데 소주 겨우 참음. 이번에 기름을 너무 많이 넣기는 한 듯. 다음에는 포도씨유 말고 올리브유 사용하기', calories: 750, carbs: 27, protein: 22, fat: 20, sugar: 2, date: '2025-04-15'},
//   { name: '계란 토스트', time: '오전 7:30', image: 'https://static.wtable.co.kr/image/production/service/recipe/2067/0cbe55e0-b189-4ae3-a670-638b53f45b73.jpg?size=800x800', ingredients: '통밀식빵, 달걀, 치즈, 우유', calories: 320, carbs: 28, protein: 18, fat: 12, sugar: 6, date: '2025-04-15'},
//   { name: '쇠고기 미역국과 밥', time: '오후 1:10', image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/08/29/2bad7206644f82f63d339b11c7344dc61.jpg', ingredients: '소고기, 미역, 참기름, 쌀밥', calories: 460, carbs: 50, protein: 25, fat: 14, sugar: 3, date: '2025-04-15'},
//   { name: '두부김치', time: '오후 6:40', image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/10/06822a9fe6e7213aeb0e3fb0ff19ee3c1.jpg', ingredients: '두부김치 먹었는데 소주 겨우 참음. 이번에 기름을 너무 많이 넣기는 한 듯. 다음에는 포도씨유 말고 올리브유 사용하기', calories: 750, carbs: 27, protein: 22, fat: 20, sugar: 2, date: '2025-04-15'}
// ]
