    <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
<html lang="en">
<!--167-->
<head>
    <meta charset="UTF-8">
    <title>我的员工</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <link href="http://www.ehaofang.com/img/ef.ico" type="image/x-icon" rel="icon">
    <link href="http://www.ehaofang.com/img/ef.ico" type="image/x-icon" rel="shortcut icon">
    <link rel="stylesheet" href="less/myEmployee.css">
    <script src="js/setting.js?v=201804251233"></script>
    <script src="static/fastclick.min.js"></script>
</head>
<body>
<div class="page_employee">
    <div class="header">
        <a class="back" id="back" href="javascript:;" onclick="history.go(-1)"></a>
        <div class="title">我的员工</div>
    </div>
    <div class="tab">
        <!--在职-->
        <div class="tab_list" id="tab_list">
        </div>
    </div>
</div>
<script src="static/jquery.min.js"></script>
<script src="js/myEmployee.js?v=201804090937"></script>
</body>
</html>