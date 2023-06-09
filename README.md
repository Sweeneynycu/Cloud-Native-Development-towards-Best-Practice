# Cloud-Native-Development-towards-Best-Practice
期中作業

## User Story
- 作為台南市的居民，小美每到春天都會十分擔心所在地區會面臨停水降壓的問題，因此希望可以隨時追蹤所在地區的水庫水情，除此之外，小美也希望可以隨時查看電力負載以及地震歷史紀錄，並希望不要發生小動物誤入導致停電的現象。
- 進入應用程式後，根據所在地區，應用程式會自動獲取當地水庫、電力和地震相關的數據，並以圖表來呈現，讓小美可以輕易的了解目前的水庫水情、電力負載狀況和地震歷史紀錄。
- 這個應用程式提供實時且清楚的數據圖表，讓用戶能夠快速了解和應對目前的水庫、電力和地震情況。

## UI Design & User Experience
![image](https://user-images.githubusercontent.com/122248174/233845265-5b7db718-d1da-495e-9a7a-0a1885b3b23e.png)  
1. 水庫水情
    - 以上色的圓形圖示更清晰地表達即時的水庫水情報告，方便用戶直觀地比較不同水庫之間的數據和趨勢，並且可以點擊進入查看各個水庫的實時數據和歷史記錄。
2. 電力負載狀況
    - 提供了即時的電力負載狀況報告，包括即時用電量、以及最大供電能力，並可以點擊進入查看更詳細的用電情況和趨勢。
3. 地震歷史紀錄
    - 提供了最新地震紀錄，包含地震震度大小及時間，可以點擊進入查看歷史地震的詳細資料和相關數據。

## Application Architecture
![image](https://user-images.githubusercontent.com/122248174/233845388-6224ce3b-47e0-4258-af56-eafe0169be9c.png)  
- 我們的應用程式架構包含多個不分，負責處理用戶請求、數據抓取、分析和展示圖表數據。
- 用戶透過 Web Frontend 輸入查詢
- Web Frontend 向 Web Backend 發送請求
- Web Backend 從 Database 檢索相關數據進行計算、分析和展示圖表數據。
- Content Crawler 會和 target website 進行互動，自動抓取需要的資料，包括水庫水情、電力負載、地震歷史紀錄等等，儲存到database中。
- 整個架構旨在提供用戶可靠、高效、方便的資訊查詢和展示工具。



