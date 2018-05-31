<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>房贷计算器</title>
    <meta name="keywords" content="房贷计算器最新2018,房贷计算器2018,房贷计算器,公积金贷款计算器">
    <meta name="description"
          content="每天89万人使用我们开发的房贷计算器最新2018，房贷计算器官网为大家提供在房贷计算器最新2018,贷款计算器最新2018,公积金贷款计算器，帮助大家计算房贷、首付、利息、月供">
    <meta name="generator" content="emlog">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" type="text/css" href="./loan/common.min.css">
    <link rel="stylesheet" type="text/css" href="./loan/houseloan.min.css">
    <script type="text/javascript" src="./loan/zepto.min.js"></script>
    <script type="text/javascript" src="./loan/houseloan_calculator.js"></script>
    <script src="./loan/common_tpl.js" type="text/javascript"></script>
</head>
<body>
<div class="container">
    <div class="calculator">
        <header class="ui-bar" skin="title">
            <h1 class="title">计算结果</h1>
            <div class="left">
                <a class="ui-btn" skin="mini back" wrap="t5">
                    <img onclick="window.history.back()" src="loan/ic_back.png" height="17" width="9"/></a>
            </div>
        </header>
        <div view="calc_input" style="display:block;">
            <nav class="switch-tabs big-switch-tabs">
                <ul>
                    <li id="business_calc" class="tab normal-tab">
                        <a href="javascript:void(0)">商业贷款计算器</a>
                    </li>
                    <li id="PAF_calc" class="tab normal-tab">
                        <a href="javascript:void(0)">公积金贷款计算器</a>
                    </li>
                    <li id="mix_calc" class="tab select-tab">
                        <a href="javascript:void(0)">组合贷款计算器</a>
                    </li>
                </ul>
            </nav>
            <div class="input-fields" wrap="h10">
                <ul>
                    <li id="business_sum_line" class="field-wrap"
                        style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <label>商业贷款</label>
                        <div class="field">
                            <div class="ui-text" data-tail="万元">
                                <input type="number" id="business_sum" value="100"></div>
                        </div>
                    </li>
                    <li id="PAF_sum_line" class="field-wrap"
                        style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <label>公积金贷款</label>
                        <div class="field">
                            <div class="ui-text" data-tail="万元">
                                <input type="number" id="PAF_sum" value="80"></div>
                        </div>
                    </li>
                    <li class="field-wrap">
                        <label>贷款期限</label>
                        <div class="field">
                            <div class="ui-select">
                                <div class="value-bar">
                                    <span id="loan_period_select_bar" class="text" value="20">20年（240期）</span>
                                    <span class="icon-sps tail-icon"></span>
                                </div>
                                <select id="loan_period_select">
                                    <option value="0">半年（6期）</option>
                                    <option value="1">1年（12期）</option>
                                    <option value="2">2年（24期）</option>
                                    <option value="3">3年（36期）</option>
                                    <option value="4">4年（48期）</option>
                                    <option value="5">5年（60期）</option>
                                    <option value="6">6年（72期）</option>
                                    <option value="7">7年（84期）</option>
                                    <option value="8">8年（96期）</option>
                                    <option value="9">9年（108期）</option>
                                    <option value="10">10年（120期）</option>
                                    <option value="11">11年（132期）</option>
                                    <option value="12">12年（144期）</option>
                                    <option value="13">13年（156期）</option>
                                    <option value="14">14年（168期）</option>
                                    <option value="15">15年（180期）</option>
                                    <option value="16">16年（192期）</option>
                                    <option value="17">17年（204期）</option>
                                    <option value="18">18年（216期）</option>
                                    <option value="19">19年（228期）</option>
                                    <option value="20" selected="selected">20年（240期）</option>
                                    <option value="21">21年（252期）</option>
                                    <option value="22">22年（264期）</option>
                                    <option value="23">23年（276期）</option>
                                    <option value="24">24年（288期）</option>
                                    <option value="25">25年（300期）</option>
                                    <option value="26">26年（312期）</option>
                                    <option value="27">27年（324期）</option>
                                    <option value="28">28年（336期）</option>
                                    <option value="29">29年（348期）</option>
                                    <option value="30">30年（360期）</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li id="business_rate_select_line" class="field-wrap"
                        style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <label>商贷利率</label>
                        <div class="field long-field" id="business_rate_select_field">
                            <div class="ui-select">
                                <div class="value-bar">
                                    <span id="business_rate_select_bar" class="text" value="12">最新基准利率</span>
                                    <span class="icon-sps tail-icon"></span>
                                </div>
                                <select id="business_rate_select" input-method="auto">
                                    <option value="-1">手动输入</option>
                                    <option value="12" data-key="18-01-01" selected="selected">最新基准利率</option>
                                </select>
                            </div>
                        </div>
                        <div class="field short-field" id="business_discount_field">
                            <div class="ui-select">
                                <div class="value-bar">
                                    <span id="business_discount_bar" class="text" data-discount="1.0">无折扣</span>
                                    <span class="icon-sps tail-icon"></span>
                                </div>
                                <select id="business_discount">
                                    <option value="0" data-discount="1.0" selected="selected">无折扣</option>
                                    <option value="10" data-discount="1.2">1.2倍</option>
                                    <option value="9" data-discount="1.15">1.15倍</option>
                                    <option value="8" data-discount="1.1">1.1倍</option>
                                    <option value="7" data-discount="1.05">1.05倍</option>
                                    <option value="6" data-discount="0.95">95折</option>
                                    <option value="5" data-discount="0.9">9折</option>
                                    <option value="4" data-discount="0.85">85折</option>
                                    <option value="3" data-discount="0.8">8折</option>
                                    <option value="2" data-discount="0.75">75折</option>
                                    <option value="1" data-discount="0.7">7折</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li id="business_rate_value_line" class="field-wrap"
                        style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <label></label>
                        <div class="field">
                            <div class="ui-text rate-text" data-tail="%">
                                <input type="number" id="business_rate" value="4.9"></div>
                        </div>
                    </li>
                    <li id="PAF_rate_line" class="field-wrap"
                        style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <label>公积金利率</label>
                        <div class="field long-field">
                            <div class="ui-select">
                                <div class="value-bar">
                                    <span id="PAF_rate_select_bar" class="text" value="12">最新基准利率</span>
                                    <span class="icon-sps tail-icon"></span>
                                </div>
                                <select id="PAF_rate_select" input-method="auto">
                                    <option value="-1">手动输入</option>
                                    <option value="12" data-key="18-01-01" selected="selected">最新基准利率</option>
                                </select>
                            </div>
                        </div>
                        <div class="field short-field">
                            <div class="ui-text" data-tail="%">
                                <input type="number" id="PAF_rate" value="3.25"></div>
                        </div>
                    </li>
                    <li class="field-wrap">
                        <label>还款方式</label>
                        <div class="field mid-field">
                            <label class="repay-method">
                                <input type="radio" name="repayType" id="repay_radio1" value="1" checked="checked">&nbsp;等额本息</label>
                        </div>
                        <div class="field mid-field">
                            <label class="repay-method">
                                <input type="radio" name="repayType" id="repay_radio2" value="2">&nbsp;等额本金</label>
                        </div>
                    </li>
                </ul>
                <div class="calbtn-wrap">
                    <a id="calculate" class="ui-btn" skin="blue full">计&nbsp;算</a>
                </div>
            </div>
        </div>
        <div class="calc-result hide" view="calc_result">
            <header class="ui-bar" skin="title">
                <h1 class="title">计算结果</h1>
                <div class="left">
                    <a id="back_to_calc_input" class="ui-btn" skin="mini back" wrap="t5">返回</a>
                </div>
            </header>
            <nav class="switch-tabs">
                <ul>
                    <li id="result_tab_1" class="result-tab normal-tab" tab-id="1">
                        <a href="javascript:void(0)">等额本息</a>
                    </li>
                    <li id="result_tab_2" class="result-tab normal-tab" tab-id="2">
                        <a href="javascript:void(0)">等额本金</a>
                    </li>
                </ul>
            </nav>
            <div id="result_data_1" class="result-data hide">
                <ul class="result-list">
                    <li class="group-tit">还款数据摘要</li>
                    <li id="business_interest_total_debx" class="hide"
                        style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <div class="item-name">商贷利息</div>
                        <div id="business_interest_total_1" class="item-value"></div>
                    </li>
                    <li id="PAF_interest_total_debx" class="hide"
                        style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <div class="item-name">公积金利息</div>
                        <div id="PAF_interest_total_1" class="item-value"></div>
                    </li>
                    <li>
                        <div class="item-name">利息总额</div>
                        <div id="interest_total_1" class="item-value"></div>
                    </li>
                    <li>
                        <div class="item-name">累计还款总额</div>
                        <div id="repay_total_1" class="item-value"></div>
                    </li>
                    <li>
                        <div class="item-name">每月月供</div>
                        <div id="repay_monthly_1" class="item-value"></div>
                    </li>
                    <li>
                        <div class="item-name">最高月付利息</div>
                        <div id="interest_monthly_1" class="item-value"></div>
                    </li>
                </ul>
                <div class="data-container wid2 clear">
                    <div class="group-tit">还款数据明细</div>
                    <table class="data-table table-striped">
                        <thead>
                        <tr>
                            <th>期次</th>
                            <th>偿还本息</th>
                            <th>偿还利息</th>
                            <th>偿还本金</th>
                            <th>剩余本金</th>
                        </tr>
                        </thead>
                        <tbody id="simple_data_table_1"></tbody>
                    </table>
                    <div class="view-more" data-detail="1">
                        <div class="detail">
                            <p class="txt">查看更多数据...</p>
                        </div>
                        <i data-icon="&gt;"></i>
                    </div>
                </div>
            </div>
            <div id="result_data_2" class="result-data hide">
                <ul class="result-list">
                    <li class="group-tit">还款数据摘要</li>
                    <li id="business_interest_total_debj" class="hide"
                        style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <div class="item-name">商贷利息</div>
                        <div id="business_interest_total_2" class="item-value"></div>
                    </li>
                    <li id="PAF_interest_total_debj" class="hide"
                        style="display: list-item; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                        <div class="item-name">公积金利息</div>
                        <div id="PAF_interest_total_2" class="item-value"></div>
                    </li>
                    <li>
                        <div class="item-name">利息总额</div>
                        <div id="interest_total_2" class="item-value"></div>
                    </li>
                    <li>
                        <div class="item-name">累计还款总额</div>
                        <div id="repay_total_2" class="item-value"></div>
                    </li>
                    <li>
                        <div class="item-name">最高月供</div>
                        <div id="repay_monthly_2" class="item-value"></div>
                    </li>
                    <li>
                        <div class="item-name">最高月付利息</div>
                        <div id="interest_monthly_2" class="item-value"></div>
                    </li>
                </ul>
                <div class="data-container wid2 clear">
                    <div class="group-tit">还款数据明细</div>
                    <table class="data-table table-striped">
                        <thead>
                        <tr>
                            <th>期次</th>
                            <th>偿还本息</th>
                            <th>偿还利息</th>
                            <th>偿还本金</th>
                            <th>剩余本金</th>
                        </tr>
                        </thead>
                        <tbody id="simple_data_table_2"></tbody>
                    </table>
                    <div class="view-more" data-detail="2">
                        <div class="detail">
                            <p class="txt">查看更多数据...</p>
                        </div>
                        <i data-icon="&gt;"></i>
                    </div>
                </div>
            </div>
            <div class="recal-btn" wrap="h10">
                <a id="recalculate" class="ui-btn" skin="blue full">重新计算</a>
            </div>
        </div>
        <div id="data_detail_bar" class="ui-bar-fixed hide">
            <header class="ui-bar" skin="title">
                <h1 class="title">数据明细</h1>
                <div class="left">
                    <a id="back_to_calc_result" class="ui-btn" skin="mini back" wrap="t5">返回</a>
                </div>
            </header>
        </div>
        <div class="data-detail hide" view="data_detail">
            <div id="data_detail_1" class="data-container wid2 clear hide">
                <table class="data-table table-striped">
                    <thead>
                    <tr>
                        <th>期次</th>
                        <th>偿还本息</th>
                        <th>偿还利息</th>
                        <th>偿还本金</th>
                        <th>剩余本金</th>
                    </tr>
                    </thead>
                    <tbody id="standard_data_table_1"></tbody>
                </table>
            </div>
            <div id="data_detail_2" class="data-container wid2 clear hide">
                <table class="data-table table-striped">
                    <thead>
                    <tr>
                        <th>期次</th>
                        <th>偿还本息</th>
                        <th>偿还利息</th>
                        <th>偿还本金</th>
                        <th>剩余本金</th>
                    </tr>
                    </thead>
                    <tbody id="standard_data_table_2"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
</html>