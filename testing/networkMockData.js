export default {
  network:{
    company:['BCycle, LLC'],
    gbfs_href:'https://gbfs.bcycle.com/bcycle_denver/gbfs.json',
    href:'/v2/networks/denver','id':'denver',
    location:{'city':'Denver, CO','country':'US','latitude':39.72055,'longitude':-104.95253},
    name:'Denver B-cycle',
    stations:[
      {
        'empty_slots':2,
        'extra':{
          'address':'1700 Wewatta St',
          'last_updated':1551746315,
          'renting':1,'returning':1,
          'uid':'bcycle_denver_3395'
        },
        free_bikes:28,
        id:'61095b6d414001418d873aab20372c78',
        latitude:39.75387,
        longitude:-105.00105,
        name:'17th & Wewatta',
        timestamp:'2019-03-05T00:38:35.983000Z'
      }
    ]
  }
};

export const transformedNetworkData = {
    company:['BCycle, LLC'],
    gbfs_href:'https://gbfs.bcycle.com/bcycle_denver/gbfs.json',
    href:'/v2/networks/denver','id':'denver',
    city:'Denver, CO',
    country:'US',
    latitude:39.72055,
    longitude:-104.95253,
    name:'Denver B-cycle',
    stations:[
      {
        empty_slots:2,
        extra:{
          address:'1700 Wewatta St',
          last_updated:1551746315,
          renting:1,'returning':1,
          uid:'bcycle_denver_3395'
        },
        free_bikes:28,
        id:'61095b6d414001418d873aab20372c78',
        latitude:39.75387,
        longitude:-105.00105,
        name:'17th & Wewatta',
        timestamp:'2019-03-05T00:38:35.983000Z'
      }],
      search: 'Denver, CO, US - Denver B-cycle'
  };
