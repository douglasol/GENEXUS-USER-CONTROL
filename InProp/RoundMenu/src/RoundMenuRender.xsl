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
      <xsl:when test="@type = 'RoundMenu'">
        <xsl:call-template name="RenderRoundMenu"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- RoundMenu design render -->
  <!-- ///////////////////  Implement your render here  ///////////////////-->
  <xsl:template name="RenderRoundMenu">
    <span atomicselection="true">
    <p> Round Menu </p>
    </span>
  </xsl:template>

</xsl:stylesheet>
