<template>
  <div class="home">
    <section class="sort_container">
      <div class="sort_item">
        <div class="sort_item_container">
          <div class="sort_item_border">
            <span>筛选</span>
            <span class="glyphicon glyphicon-chevron-down sort_icon"></span>
          </div>
        </div>
      </div>
      <div class="sort_item">
        <div class="sort_item_container">
          <div>
            <span>排序</span>
            <span class="glyphicon glyphicon-chevron-down sort_icon"></span>
          </div>
        </div>
      </div>
    </section>
    <section class="hy_list_container">
      <div class="hylist_container">
        <ul>
          <li class="hy_li" @click="clickItem(issue.id)" v-for="issue in issues">
            <section>
              <div class="hy_img text-center">
                <span class="glyphicon glyphicon-file hy_file"></span>
              </div>
            </section>
            <hgroup class="shop_right">
              <header class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{issue.name}}</h4>
              </header>
              <h5 class="fee_distance">
                <section class="fee">
                  创建时间：{{issue.fileDate}}
                </section>
              </h5>
            </hgroup>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import {getPageByStatusExe} from '../../service/issue'
  export default {
    data() {
      return {
        status: this.$router.currentRoute.params.status,
        issues: []
      }
    },
    mounted(){
      let status = this.$router.currentRoute.params.status;
      if (status == "zxz"){
        this.$root.$emit.apply(this.$root, ['change-header'].concat(["决策执行清单", true]));
      } else {
        this.$root.$emit.apply(this.$root, ['change-header'].concat(["已决策议题", true]));
      }
      getPageByStatusExe(this.status).then(result => {
        if(result.result)
          this.issues = result.data;
      });
    },
    methods: {
      clickItem: function (id) {
        this.$router.push('/issue/exe/' + id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    padding-top: 3.5rem;
    width 100%
    height 100%
    .sort_container
      background-color: #fff;
      border-bottom: .025rem solid #f1f1f1;
      position: fixed;
      top: 1.9rem;
      right: 0;
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      z-index: 13;
      box-sizing: border-box;
      .sort_item
        font-size: .55rem;
        color: #444;
        width: 50%;
        height: 1.6rem;
        text-align: center;
        line-height: 1rem;
        .sort_item_container
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 14;
          background-color: #fff;
          box-sizing: border-box;
          padding-top: 0.4rem;
          .sort_item_border
            height: 1rem;
            border-right: .035rem solid #e4e4e4;
            .sort_icon
              height 0.5rem
    .hy_list_container
      .hylist_container
        background-color: #fff;
        padding-bottom: 2rem;
      .hy_li
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        border-bottom: .025rem solid #f1f1f1;
        padding: 0.5rem;
        .hy_img
          width: 100%;
          height: 100%;
          display: block;
          margin-right: .4rem;
          border-right: .025rem solid #f1f1f1;
          padding-top: 1.5rem;
          .hy_file
            color: #ccc;
            font-size: 1rem;
            .active
              color: #3190e8;
        .shop_right
          -webkit-box-flex: 1;
          -ms-flex: auto;
          flex: auto;
          margin-left: 0.4rem;
          .shop_detail_header
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            .shop_title
              width: 10rem;
              color: #333;
              padding-top: .01rem;
              font: .65rem/.65rem PingFangSC-Regular;
              font-weight: 700;
              .ellipsis
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
          .fee_distance
            margin-top: 1rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            font-size: .5rem;
            color: #666;
            .fee
              font-size: .5rem;
              color: #666;
              span
                color: #999;
              .segmentation
                color: #ccc;
              .order_time
                color: #3190e8;
</style>
