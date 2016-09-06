<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxml="urn:schemas-microsoft-com:xslt"
	xmlns:gx="urn:shemas-artech-com:gx"
	exclude-result-prefixes="msxml gx"
	xmlns:gxca="urn:GXControlAdap">
  <xsl:output method="html"/>
  <xsl:template match="/" >
    <xsl:apply-templates select="/GxControl"/>
  </xsl:template>
  <xsl:template match="GxControl">
    <xsl:choose>
      <xsl:when test="@type = 'BootstrapDropdown'">
        <xsl:call-template name="RenderBootstrapDropdown"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- BootstrapDropdown design render -->
  <!-- ///////////////////  Implement your render here  ///////////////////-->
  <xsl:template name="RenderBootstrapDropdown">
    <span atomicselection="true">
	<div style="border:2px solid #5d4384;">
    <h2 style="background:#5d4384;color:5d4384;padding:5px; font-size: 30px; font-family: Helvetica,Arial,sans-serif;">Bootstrap</h2>
    <p style="color:#5d4384;padding:5px; font-family: Helvetica,Arial,sans-serif ;font-size: 20px;">Dropdown</p>
	</div>
    </span>
  </xsl:template>

  <!-- Helpers Templates 
  <xsl:template name="AddStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Width')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>height: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Height')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>border-style: solid;	border-width: 2px;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>-->
</xsl:stylesheet>
