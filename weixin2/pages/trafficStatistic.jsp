
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="cs.jsp" %>
<%CS cs = new CS(1261065396);cs.setHttpServlet(request,response);
String imgurl = cs.trackPageView();%> 
<img src="<%= imgurl %>" width="0" height="0" style="display:none;"/>